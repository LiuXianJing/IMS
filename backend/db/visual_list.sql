CREATE TABLE imsdb.visual_list (
	`id` INT not NULL AUTO_INCREMENT PRIMARY KEY,
	`name` VARCHAR(255) NOT null,
	`logo` VARCHAR(1000),
	`url` VARCHAR(1000),
    `description` TEXT
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci
COMMENT='Visualizing list data';

INSERT INTO imsdb.visual_list (name, description) VALUES
('haL', 'This is a list of Visual data'),
('DF DD', '华山险峻'),
('v发v反对', 'AIGC is more popular'),
('DF', 'LLM is a large language model'),
('BF', '数据不好编呀'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd'),
('SD', 'vfd bfdbgd');
