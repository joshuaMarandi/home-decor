<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Database Connection
$conn = new mysqli("localhost", "root", "", "shop_db");

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Database connection failed"]));
}

// Read JSON data from the request
$data = json_decode(file_get_contents("php://input"), true);

if (!$data || empty($data["items"]) || empty($data["total"])) {
    echo json_encode(["success" => false, "message" => "Invalid order data"]);
    exit;
}

// Insert Order
$total_price = $data["total"];
$order_query = "INSERT INTO orders (total_price) VALUES ($total_price)";
if ($conn->query($order_query) === TRUE) {
    $order_id = $conn->insert_id;

    // Insert Order Items
    foreach ($data["items"] as $item) {
        $product_id = $item["id"];
        $quantity = $item["quantity"];
        $price = $item["price"];

        $conn->query("INSERT INTO order_items (order_id, product_id, quantity, price) 
                      VALUES ($order_id, $product_id, $quantity, $price)");
    }

    echo json_encode(["success" => true, "message" => "Order placed successfully!"]);
} else {
    echo json_encode(["success" => false, "message" => "Order failed"]);
}

$conn->close();
?>
