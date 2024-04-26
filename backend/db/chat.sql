CREATE TABLE imsdb.chat (
	`id` INT not NULL AUTO_INCREMENT PRIMARY KEY,
	`name` VARCHAR(50) NOT null COMMENT 'User Name',
    `type` ENUM('admin', 'user', 'guest') NOT NULL,
    `message` TEXT NOT NULL,
    `message_type` ENUM('text','image','video','audio','file') DEFAULT 'text',
	`logo` VARCHAR(1000) COMMENT 'User Logo',
	`url` VARCHAR(1000) COMMENT 'User home website URL',
    `description` TEXT,
    `time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci
COMMENT='chat messages data';


INSERT INTO chat(name, type, message, logo) VALUES 
('Jiafei', 'guest', 'Hello, I am Jiafei, I am a Musical Artist.', 'https://static.miraheze.org/flopediawiki/thumb/c/c2/Jiafei.jpg/300px-Jiafei.jpg'),
('Charlie Chaplin', 'user', 'Hello, I am Charlie Chaplin, I am a Musical Artist', 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'),
('Jiafei', 'guest', 'Hello, I am Jiafei, I am a Musical Artist.', 'https://static.miraheze.org/flopediawiki/thumb/c/c2/Jiafei.jpg/300px-Jiafei.jpg'),
('Jiafei', 'guest', 'Hello, I am Jiafei, I am a Musical Artist.', 'https://static.miraheze.org/flopediawiki/thumb/c/c2/Jiafei.jpg/300px-Jiafei.jpg'),
('Charlie Chaplin', 'user', 'Hello, I am Charlie Chaplin, I am a Musical Artist', 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'),
('Jiafei', 'guest', 'Hello, I am Jiafei, I am a Musical Artist.', 'https://static.miraheze.org/flopediawiki/thumb/c/c2/Jiafei.jpg/300px-Jiafei.jpg'),
('Jiafei', 'guest', 'Hello, I am Jiafei, I am a Musical Artist.', 'https://static.miraheze.org/flopediawiki/thumb/c/c2/Jiafei.jpg/300px-Jiafei.jpg'),
('Charlie Chaplin', 'user', 'Hello, I am Charlie Chaplin, I am a Musical Artist', 'https://api.dicebear.com/7.x/miniavs/svg?seed=1'),
('Jiafei', 'guest', 'Hello, I am Jiafei, I am a Musical Artist.', 'https://static.miraheze.org/flopediawiki/thumb/c/c2/Jiafei.jpg/300px-Jiafei.jpg')