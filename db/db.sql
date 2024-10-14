-- Creation of the database if it does not already exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'db') THEN
        EXECUTE 'CREATE DATABASE db';
    END IF;
END $$;

-- Connection to the database
\c db;

-- Creation of the products table
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity_in_stock INT DEFAULT 0,
    reorder_level INT DEFAULT 5,
    category VARCHAR(100),
    supplier VARCHAR(100),
    description TEXT
);

-- We can use a parsed CSV instead (TODO)
-- Insertion of data if the table is empty
INSERT INTO products (name, price, quantity_in_stock, reorder_level, category, supplier, description) VALUES
('Smartphone X10', 999.99, 20, 5, 'Electronics', 'Tech Gadgets Inc.', 'Latest smartphone with cutting-edge features.'),
('Robot Aspirateur ProClean', 299.99, 15, 3, 'Home Appliances', 'HomeSmart Solutions', 'Smart robot vacuum cleaner for effortless cleaning.'),
('Écouteurs Sans Fil SoundBuds', 79.99, 50, 10, 'Electronics', 'AudioWave Electronics', 'High-quality wireless earbuds with noise cancellation.'),
('Cafetière Électrique BrewMaster', 49.99, 30, 5, 'Home Appliances', 'BrewTech Co.', 'Automatic coffee maker for the perfect brew.'),
('Ordinateur Portable PowerBook', 1299.99, 10, 2, 'Electronics', 'UltraComputing Corp.', 'Powerful laptop for professionals and gamers.'),
('Tablette Tactile SmartTab', 499.99, 25, 5, 'Electronics', 'Tech Gadgets Inc.', 'Versatile tablet for work and play.'),
('Montre Connectée FitTrack', 199.99, 40, 7, 'Wearables', 'Wearable Devices Ltd.', 'Smartwatch with fitness tracking capabilities.'),
('Chargeur Solaire EcoCharge', 39.99, 60, 15, 'Accessories', 'GreenTech Innovations', 'Eco-friendly solar charger for devices.'),
('Enceinte Bluetooth SoundWave', 89.99, 35, 8, 'Electronics', 'SoundVision Ltd.', 'Portable Bluetooth speaker with rich sound.'),
('Imprimante Multifonction PrintPro', 199.99, 12, 4, 'Office Equipment', 'PrintMasters Co.', 'All-in-one printer for home and office use.'),
('Casque Audio ProSound', 129.99, 25, 6, 'Electronics', 'AudioGear Co.', 'High-quality audio headset for music lovers.'),
('Écran LED 4K Ultra HD VisionPlus', 599.99, 15, 3, 'Electronics', 'VisionTech Ltd.', 'Stunning 4K display for an immersive experience.'),
('Disque Dur Externe UltraStore', 89.99, 40, 10, 'Storage', 'Storage Solutions Inc.', 'Portable external hard drive for data backup.'),
('Couteau de Cuisine ChefMaster', 39.99, 50, 5, 'Kitchenware', 'KitchenWare Supplies', 'Premium chef knife for culinary enthusiasts.'),
('Brosse à Dents Électrique CleanBrush', 29.99, 60, 15, 'Health & Beauty', 'CleanTech Innovations', 'Electric toothbrush for optimal dental care.'),
('Machine à Pain HomeBakery', 79.99, 20, 4, 'Kitchen Appliances', 'Baking Masters', 'Automatic bread maker for fresh loaves.'),
('Appareil Photo Numérique SnapShot', 499.99, 10, 2, 'Electronics', 'CaptureTech Inc.', 'High-resolution digital camera for photography.'),
('Clavier Mécanique GameKey', 89.99, 30, 5, 'Gaming', 'Gaming Gear Co.', 'Mechanical keyboard for gamers.'),
('Tapis de Yoga EcoFriendly', 29.99, 75, 20, 'Fitness', 'EcoYoga Essentials', 'Sustainable yoga mat for practice.'),
('Drones de Loisirs SkyHawk', 299.99, 15, 3, 'Toys & Hobbies', 'DroneTech Innovations', 'Fun and easy-to-use recreational drone.'),
('Sèche-Cheveux TurboDry', 49.99, 40, 10, 'Health & Beauty', 'HomeCare Supplies', 'Powerful hair dryer for quick styling.'),
('Moniteur Gaming SpeedView', 249.99, 12, 4, 'Gaming', 'Gaming Monitors Ltd.', 'High refresh rate monitor for smooth gaming.'),
('Équipement de Fitness HomeGym', 399.99, 8, 2, 'Fitness', 'FitTech Corp.', 'Complete gym equipment for home workouts.'),
('Barbecue Électrique GrillMaster', 159.99, 20, 5, 'Kitchen Appliances', 'GrillMasters Supplies', 'Electric grill for delicious barbecue.'),
('Balance Connectée HealthScale', 49.99, 35, 8, 'Health & Beauty', 'HealthSmart Products', 'Smart scale for tracking health metrics.'),
('Table de Mixage SoundCraft', 299.99, 10, 2, 'Music', 'Sound & Music Co.', 'Professional mixing console for audio production.'),
('Lunettes de Réalité Virtuelle VRZone', 199.99, 25, 5, 'Electronics', 'Virtual Reality Gadgets', 'Immersive VR headset for gaming and more.'),
('Accessoires de Voyage TravelKit', 39.99, 100, 15, 'Travel', 'Travel Essentials Ltd.', 'All-in-one travel accessory kit.'),
('Matériel de Bureau SmartDesk', 149.99, 40, 10, 'Office Equipment', 'Office Supplies Hub', 'Ergonomic desk for home office setup.'),
('Chargeur sans Fil QuickCharge', 29.99, 60, 15, 'Accessories', 'Wireless Innovations Corp.', 'Fast wireless charger for smartphones.')
ON CONFLICT (id) DO NOTHING;

GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE products TO postgres;