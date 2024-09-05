<?php

$hostname = 'localhost';
$database = 'personal-expense-control';
$username = 'postgres';
$password = 'bergaminibd0824';

try {
    $pdo = new PDO("pgsql:host=$hostname;dbname=$database", $username, $password);
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}