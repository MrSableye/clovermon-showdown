import Axios from 'axios';
import probe from 'probe-image-size';

interface Dimensions {
	width: number;
	height: number;
}

interface AspectRatio {
	width: number;
	height: number;
}

interface VerificationParameters {
	validTypes: string[];
	enforceRatio?: { min: AspectRatio, max: AspectRatio };
	minDimensions?: Dimensions;
	maxDimensions?: Dimensions;
	fileSize?: number;
}

type ImageResult = { error: string } | { image: Buffer, width: number, height: number, type: string };

export const downloadImageWithVerification = async (
	imageUrl: string,
	{validTypes, enforceRatio, minDimensions, maxDimensions, fileSize}: VerificationParameters,
): Promise<ImageResult> => {
	try {
		const imageBuffer = (await Axios.get(imageUrl, {responseType: 'arraybuffer'})).data;
		const probeResult = probe.sync(imageBuffer);

		if (!probeResult) {
			return {error: 'Invalid image.'};
		}

		const {width, height, type} = probeResult;

		if (fileSize && imageBuffer.length > fileSize) {
			return {error: `Invalid image size. Found image of size ${imageBuffer.length}B, must be less than ${fileSize}B`};
		}

		if (!validTypes.includes(type)) {
			return {error: `Invalid image type. Found image of type ${type}, must be one of ${validTypes.join(',')}`};
		}

		if (enforceRatio) {
			const ratio = width / height;
			const minRatio = enforceRatio.min.width / enforceRatio.min.height;
			const maxRatio = enforceRatio.max.width / enforceRatio.max.height;
			if (ratio < minRatio || ratio > maxRatio) {
				return {error: `Invalid image size. Found image of size ${width}x${height}. Must have an aspect ratio between ${enforceRatio.min.width}:${enforceRatio.min.height} (${minRatio.toFixed(3)}) and ${enforceRatio.max.width}:${enforceRatio.max.height} (${maxRatio.toFixed(3)})`};
			}
		}

		if (minDimensions) {
			if (width < minDimensions.width || height < minDimensions.height) {
				return {error: `Invalid image size. Found image of size ${width}x${height}. Must be greater than or equal to ${minDimensions.width}x${maxDimensions?.height}`};
			}
		}

		if (maxDimensions) {
			if (width > maxDimensions.width || height > maxDimensions.height) {
				return {error: `Invalid image size. Found image of size ${width}x${height}. Must be less than or equal to ${maxDimensions.width}x${maxDimensions.height}`};
			}
		}

		return {image: imageBuffer, width, height, type};
	} catch {
		return {error: 'Unknown error downloading image. '};
	}
};

export default {downloadImageWithVerification};
