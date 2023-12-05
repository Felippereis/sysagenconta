<?php

// Conectar ao banco de dados (substitua os valores conforme necessário)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gerenciamento_contas";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

// Selecionar todos os dados da tabela
$sql = "SELECT * FROM contas";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Converter o resultado em um array associativo
    $contas = array();
    while ($row = $result->fetch_assoc()) {
        $contas[] = $row;
    }

    // Enviar a resposta como JSON
    echo json_encode($contas);
} else {
    echo json_encode(array());
}

$conn->close();

?>


