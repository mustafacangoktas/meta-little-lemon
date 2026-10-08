CREATE DATABASE IF NOT EXISTS littlelemon;
USE littlelemon;

CREATE TABLE IF NOT EXISTS restaurant_booking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    no_of_guests INT NOT NULL,
    booking_date DATETIME NOT NULL
);

INSERT INTO restaurant_booking (id, name, no_of_guests, booking_date) VALUES
(1, 'Jimmy Doe', 4, '2026-10-15 19:00:00'),
(2, 'Jane Doe', 2, '2026-10-15 17:00:00')
ON DUPLICATE KEY UPDATE name=VALUES(name);

CREATE TABLE IF NOT EXISTS restaurant_menuitem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    inventory INT NOT NULL
);

INSERT INTO restaurant_menuitem (id, title, price, inventory) VALUES
(1, 'Greek Salad', 10.00, 20),
(2, 'Bruschetta', 8.00, 15),
(3, 'Lemon Dessert', 6.00, 25),
(4, 'Grilled Fish', 15.00, 10),
(5, 'Pasta', 12.00, 18)
ON DUPLICATE KEY UPDATE title=VALUES(title);

CREATE TABLE IF NOT EXISTS restaurant_menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    inventory INT NOT NULL
);

INSERT INTO restaurant_menu (id, title, price, inventory) VALUES
(1, 'Greek Salad', 10.00, 20),
(2, 'Bruschetta', 8.00, 15),
(3, 'Lemon Dessert', 6.00, 25),
(4, 'Grilled Fish', 15.00, 10),
(5, 'Pasta', 12.00, 18)
ON DUPLICATE KEY UPDATE title=VALUES(title);
