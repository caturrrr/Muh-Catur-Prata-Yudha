
CREATE DATABASE sistem_perpustakaan;
USE sistem_perpustakaan;

CREATE TABLE Buku (
    kode_buku VARCHAR(10) PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    genre VARCHAR(50) NOT NULL
);
