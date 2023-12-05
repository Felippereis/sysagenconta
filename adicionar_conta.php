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

// Obter dados enviados via POST
$data = json_decode(file_get_contents("php://input"));

$nome = $conn->real_escape_string($data->nome);
$valor = $conn->real_escape_string($data->valor);
$vencimento = $conn->real_escape_string($data->vencimento);

// Inserir dados na tabela
$sql = "INSERT INTO contas (nome, valor, vencimento) VALUES ('$nome', '$valor', '$vencimento')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(array("success" => true));
} else {
    echo json_encode(array("success" => false));
}

$conn->close();

?>
