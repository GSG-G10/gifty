BEGIN;
DROP TABLE IF EXISTS users,
product,
comments,
cart CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    username VARCHAR(100) UNIQUE,
    password VARCHAR(100) NOT NULL
);
CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price INTEGER NOT NULL,
    description TEXT,
    img TEXT NOT NULL
);
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES product(id) ON DELETE CASCADE
);
CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    quantity INTEGER DEFAULT 1,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES product(id) ON DELETE CASCADE
);
INSERT INTO users (username, email, password)
VALUES ('mpilger0', 'dkirke0@biglobe.ne.jp', '0qzksAq');
INSERT INTO users (username, email, password)
VALUES (
        'tclendennen1',
        'eruzicka1@salon.com',
        'itLImwRD'
    );
INSERT INTO users (username, email, password)
VALUES ('fwhyman2', 'tdallinder2@newsvine.com', 'cS8mlI');
INSERT INTO users (username, email, password)
VALUES (
        'gbetham3',
        'blourens3@yellowpages.com',
        'dlFtR1xvLE'
    );
INSERT INTO users (username, email, password)
VALUES (
        'rsparey4',
        'mthorndycraft4@twitpic.com',
        'dqxXyJrq'
    );
INSERT INTO users (username, email, password)
VALUES (
        'ahmadahmad',
        'ahmadahmad@gmail.com',
        '$2a$10$h6qyuAXZM.tXpwtW/FpFpeiyQqV.xPBZc.bzb8fvPUJtin2tMsVXG'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Calyptranthes acevedoi Alain',
        'perfumes',
        26,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent lectus. Vibus orcorbi a ipsum. Morbi quis tortor id nulla ultrices aliquet. ',
        'https://www.sephora.com/productimages/sku/s513176-main-zoom.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Cynodontium strumiferum (Hedw.) Lindb.',
        'flowers',
        59,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. aecenas rhoncus aliquam lacus.',
        'https://m.media-amazon.com/images/I/71zNWbTHzxL._SX679_.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Buchnera L.',
        'sweets',
        53,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Maecenas tristique, est Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        'https://digitalcontent.api.tesco.com/v2/media/ghs/7b75aa43-038b-42bd-aaff-02de501ad84c/snapshotimagehandler_1947914638.jpeg?h=540&w=540'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Leptospermum glabrescens Wakef.',
        'accessories',
        6,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
        'https://meccha-japan.com/38182-large_default/pokemon-accessory-p39.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Trichomanes punctatum Poir. ssp. sphenoides (Kunze) W. Boer',
        'sweets',
        33,
        'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In  In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis Integer ac leo. Pellentesque ultrices mattis odio.',
        'https://cdnprod.mafretailproxy.com/sys-master-root/hc2/h7e/12854680813598/8360_main.jpg_480Wx480H'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Cyathula Blume',
        'accessories',
        51,
        'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. PMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere   Ut   nulla elit ac nulla.',
        'https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/http%3A%2F%2Fimages.vintagechenty.com%2Fimages%2F20%2F01%2Fv%2F51005034%2F3.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Cordylanthus tenuis A. Gray ssp. tenuis',
        'flowers',
        4,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
        'https://fyf.tac-cdn.net/images/products/large/BF89-11K.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Urochloa maxima (Jacq.) R. Webster',
        'perfumes',
        30,
        'Cras pellentesque volutpat dui. Maecenas tristique, est et  Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam  consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
        'https://i1.perfumesclub.com/grande/123206.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Sphaeralcea pedatifida (A. Gray) A. Gray',
        'flowers',
        55,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis  Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
        'https://fyf.tac-cdn.net/images/products/small/BF104-11K.jpg?auto=webp&quality=60&width=650'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Cornus ??slavinii Rehder',
        'flowers',
        55,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.  Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et   augue.',
        'https://sf.tac-cdn.net/images/products/small/T11Z100.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Cathestecum J. Presl',
        'perfumes',
        88,
        'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl,  Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
        'https://www.flormar.com/UPLOAD/Flormar/mobile_image_1/thumb/0820004-000_small.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Spiraea L.',
        'flowers',
        17,
        'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac    neque.',
        'https://rukminim1.flixcart.com/image/416/416/j8g870w0/chocolate/y/a/c/200-jewels-assorted-chocolates-galaxy-original-imaeyfm4hb4zgc2j.jpeg?q=70'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Collomia renacta E. Joyal',
        'sweets',
        6,
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices  dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
        'https://www.friars.co.uk/images/praline-chocolate-collection-p1304-7299_image.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Arctostaphylos canescens Eastw. ssp. sonomensis (Eastw.) P.V. Wells',
        'perfumes',
        92,
        'Lorem ipsum dolor sit   pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
        'https://www.chanel.com/images/w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_1920/chance-eau-de-parfum-spray-3-4fl-oz--packshot-default-126520-8841593356318.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Spiraea ??subcanescens Rydb. (pro sp.)',
        'flowers',
        31,
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, s posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce  sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper  vel, dapibus at, diam.',
        'https://cdn.shopify.com/s/files/1/1463/4010/t/2/assets/masonry-feature-1-image.jpg?v=6292719477897739107'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Nicotiana repanda Willd. ex Lehm.',
        'flowers',
        18,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante  vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
        'https://imageresizer.static9.net.au/KySVjY8lh3_Lqpf5ZdMX58_m5k8=/1200x900/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2FNetwork%2FImages%2F2017%2F04%2F25%2F15%2F59%2F170425coach_flowers.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Muhlenbergia ??curtisetosa (Scribn.) Bush (pro sp.)',
        'accessories',
        7,
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.  massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea  consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
        'https://cdn.shopify.com/s/files/1/0533/3847/2640/collections/Homepage-Category-Rings.jpg?v=1618874686'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Vicia benghalensis L.',
        'sweets',
        42,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent  sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1603229311-img13o.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Elaphoglossum decoratum (Kunze) T. Moore',
        'sweets',
        83,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel  erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
        'https://www.karinsflorist.com/wp-content/uploads/2017/05/61P9fT4QAWL._SL1200_.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Glyptopleura marginata D.C. Eaton',
        'sweets',
        48,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  est  venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        'https://www.chocolate.lindt.com/media/catalog/product/l/i/lindt_swiss_luxury_collection_195g_box_of_chocolates_1.png?quality=80&fit=bounds&height=230&width=230&canvas=230:230'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Pseudephebe M. Choisy',
        'sweets',
        44,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante    dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
        'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/confectionerynews.com/article/2021/03/25/hames-chocolates-unleashes-hot-chocolate-bombes/12305368-3-eng-GB/Hames-Chocolates-unleashes-Hot-Chocolate-Bombes.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Digitaria Haller',
        'perfumes',
        61,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.  vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
        'https://cdn.shopify.com/s/files/1/0262/9058/5672/products/d1_1024x1024.jpg?v=1579237867'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Cycladenia humilis Benth. var. venusta (Eastw.) Woodson ex Munz',
        'sweets',
        24,
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.   Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id,  Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        'https://i1.fnp.com/images/pr/l/v20200206131642/sweet-chocolate-hamper_1.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Gleditsia L.',
        'sweets',
        51,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.  eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare  turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        'https://www.choctree.co.uk/wp-content/uploads/2018/02/Classic-15-670x508.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Calochortus westonii Eastw.',
        'accessories',
        1,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin    faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
        'https://kaleidoscope.scene7.com/is/image/OttoUK/466w/jon-richard-silver-plated-emerald-green-pear-drop-earrings~40K850FRSC.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Oreonana clementis (M.E. Jones) Jeps.',
        'perfumes',
        95,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing    nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
        'https://m.media-amazon.com/images/I/61-krB3byBL._SL1500_.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Lecidea plana (J. Lahm) Nyl.',
        'accessories',
        59,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin  semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac,  venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        'https://ae01.alicdn.com/kf/HTB1UzNWPXXXXXXQXVXXq6xXFXXXv/Women-Smooth-Bangle-Bracelet-Silver-Plated-Cuff-Snowflake-Shaped-Metal-Opened-Bracelet-Lady-Fashion-Jewelry-Accessory.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Pseudognaphalium canescens (DC.) W.A. Weber ssp. canescens',
        'flowers',
        6,
        'Nullam sit amet turpis elementum  odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        'https://www.floraindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/e/webp.net-resizeimage_1_2.jpg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Forchhammeria polyandra (Griseb.) Alain',
        'accessories',
        8,
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus  Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
        'https://img.joomcdn.net/4afccc91a2d341d731b5fb2bb841a219fb7384ae_original.jpeg'
    );
INSERT INTO product (name, category, price, description, img)
VALUES (
        'Forchhammeria polyandra (Griseb.) Alain',
        'accessories',
        8,
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus  Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
        'https://img.joomcdn.net/4afccc91a2d341d731b5fb2bb841a219fb7384ae_original.jpeg'
    );
INSERT INTO comments (description, product_id, user_id)
VALUES (
        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
        20,
        5
    );
INSERT INTO comments (description, product_id, user_id)
VALUES ('Aenean fermentum.', 4, 4);
INSERT INTO comments (description, product_id, user_id)
VALUES (
        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
        11,
        2
    );
INSERT INTO comments (description, product_id, user_id)
VALUES (
        'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
        26,
        1
    );
INSERT INTO comments (description, product_id, user_id)
VALUES (
        'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
        10,
        4
    );
INSERT INTO comments (description, product_id, user_id)
VALUES (
        'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
        24,
        4
    );
INSERT INTO comments (description, product_id, user_id)
VALUES (
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
        19,
        3
    );
INSERT INTO comments (description, product_id, user_id)
VALUES (
        'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
        26,
        5
    );
INSERT INTO comments (description, product_id, user_id)
VALUES (
        'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
        26,
        3
    );
INSERT INTO comments (description, product_id, user_id)
VALUES (
        'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
        11,
        3
    );
INSERT INTO cart (quantity, product_id, user_id)
VALUES (82, 9, 5);
INSERT INTO cart (quantity, product_id, user_id)
VALUES (23, 6, 2);
INSERT INTO cart (quantity, product_id, user_id)
VALUES (80, 4, 5);
INSERT INTO cart (quantity, product_id, user_id)
VALUES (61, 11, 5);
INSERT INTO cart (quantity, product_id, user_id)
VALUES (53, 18, 3);
INSERT INTO cart (quantity, product_id, user_id)
VALUES (22, 30, 4);
INSERT INTO cart (quantity, product_id, user_id)
VALUES (100, 3, 4);
INSERT INTO cart (quantity, product_id, user_id)
VALUES (56, 25, 1);
INSERT INTO cart (quantity, product_id, user_id)
VALUES (63, 7, 3);
INSERT INTO cart (quantity, product_id, user_id)
VALUES (67, 26, 1);
COMMIT;