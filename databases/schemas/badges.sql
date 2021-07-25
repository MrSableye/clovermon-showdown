CREATE TABLE badges (
	badge_id TEXT NOT NULL,
	badge_name TEXT NOT NULL,
	owner_id TEXT NOT NULL,
	is_external TINYINT(1) NOT NULL,
	image_path TEXT NOT NULL,
	create_date INTEGER NOT NULL,
	PRIMARY KEY (badge_id)
) WITHOUT ROWID;

CREATE TABLE user_badges (
	user TEXT NOT NULL,
	badge TEXT NOT NULL,
	is_hidden TINYINT(1) NOT NULL,
	PRIMARY KEY (user, badge)
) WITHOUT ROWID;

CREATE TABLE database_settings (
	name TEXT NOT NULL,
	val TEXT NOT NULL,
	PRIMARY KEY (name, val)
) WITHOUT ROWID;

-- set version if not exists
INSERT INTO database_settings (name, val) VALUES ('version', 0);
