INSERT INTO Vendor (Address, City, Province, Postal_Code, Phone, Type, Name, Email)
    VALUES ('123 Maple St', 'London', 'ON', 'N1N-1N1', '(555)555-5551', 'Trusted', 'ABC Supply Co.', 'abc@supply.com');
INSERT INTO Vendor (Address, City, Province, Postal_Code, Phone, Type, Name, Email)
    VALUES ('543 Sycamore Ave', 'Toronto', 'ON', 'N1P-1N2', '(999)555-5552', 'Trusted', 'Big Bills Depot', 'bb@depot.com');
INSERT INTO Vendor (Address, City, Province, Postal_Code, Phone, Type, Name, Email)
    VALUES ('922 Oak St', 'London', 'ON', 'N1N-1N3', '(555)555-5593', 'Untrusted', 'Shady Sams', 'ss@underthetable.com');
INSERT INTO Vendor (Address, City, Province, Postal_Code, Phone, Type, Name, Email)
    VALUES ('123 Streety St.', 'London', 'ON', 'N1N-1N4', '(555)555-55594', 'Trusted', 'Evelyn Infante', 'e_infantelumbreras@fanshaweonline.ca');


    INSERT INTO Product (ID, Vendor_ID, Name, Cost, MSRP, ROP, EOQ, QOH, QOO)
   VALUES ('P-01', 4, 'Product 1', 100, 120, 5, 5, 10, 0);
INSERT INTO Product (ID, Vendor_ID, Name, Cost, MSRP, ROP, EOQ, QOH, QOO)
   VALUES ('P-02', 4, 'Product 2', 200, 240, 10, 10, 20, 0);
INSERT INTO Product (ID, Vendor_ID, Name, Cost, MSRP, ROP, EOQ, QOH, QOO)
   VALUES ('P-03', 4, 'Product 3', 300, 360, 15, 15, 30, 0);
   INSERT INTO Product (ID, Vendor_ID, Name, Cost, MSRP, ROP, EOQ, QOH, QOO)
   VALUES ('P-04', 1, 'Product 4', 400, 480, 20, 20, 40, 0);
INSERT INTO Product (ID, Vendor_ID, Name, Cost, MSRP, ROP, EOQ, QOH, QOO)
   VALUES ('P-05', 2, 'Product 5', 150, 180, 8, 8, 16, 0);
INSERT INTO Product (ID, Vendor_ID, Name, Cost, MSRP, ROP, EOQ, QOH, QOO)
   VALUES ('P-06', 3, 'Product 6', 250, 300, 12, 12, 24, 0);