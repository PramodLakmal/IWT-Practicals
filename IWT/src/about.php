<!DOCTYPE html>
<html>
<head>
    <title>My Shopping cart</title>
    <link rel="stylesheet" href="styles/styles.css">
    <script src="js/mySctipt.js"></script>
</head>
<body>
    <img src="images/PngItem_203005.png" alt= "Shopping cart logo" width = "200px" height="200px" class="logo">
    <div class="header">
        <h2>Shopping Cart</h2>
        <h3>Online Shoppig Store</h3>
    </div>
    <hr>
    <nav>
        <ul>
            <li><a href="index.html"> Home</a></li>
            <li><a href="news.html">News</a></li>
            <li><a href="register.html">Contact</a></li>
            <li><a href="about.php">About</a></li>
        </ul>
    </nav>
    <?php
    define ("Company_Name", "Shopping Cart");

    echo "<h2>About " . Company_Name . "</h2>";

    echo "This page is mainly about the " . Company_Name . "web page <br><br>";

    $sold = 75;
    $total = 100;

    echo "The shopping cart<br>";
    echo "No Of Sold Items: " . $sold . "<br>";
    echo "No Of Total Items: " . $total . "<br>";

    $percentage = 0;

    function findPercentage() {

        global $sold, $total, $percentage;

        $percentage = ($sold/$total)*100;

        return $percentage;
    }

    echo "Percentage Of Sold Items: " . findPercentage() . "<br><br>";

    $today = date("Y-m-d");
    $status = "";
    $shipDay = "2019-09-21";

    $day  = " ( Today is " . date("l") . " ) ";

    if ($today > $shipDay) {
        $status = "SHIPPED";
    }
    else {
        $status = "TO BE SHIPPED";
    }
    
    echo "For " . date("d/m/y") . $day . "24 items has " . $status . "<br><br>";

    $items = array (
        "Iphone Xs" => 27,
        "Iphone X"  => 30,
        "Iphone XS Max" => 12,
        "Iphone XR" => 29,
    );

    function loopUsingWhile($arr) {

        $keys = array_keys($arr);
        $i = 0;
        echo "<ul>";

        while ($i < count($arr)) {
            echo "<li>" . $keys[$i] . " - " . $arr[$keys[$i]] . "</li>";
            $i++;
        }
        echo "</ul>";
    }
    function loopUsingDoWhile($arr) {

        $keys = array_keys($arr);
        $i = 0;
        echo "<ul>";

        do {
            echo "<li>" . $keys[$i] . " - " . $arr[$keys[$i]] . "</li>";
            $i++;
        }
        while ($i < count($arr));
        echo "</ul>";
    }
    function loopUsingFor($arr) {

        $keys = array_keys($arr);
        echo "<ul>";

        for ($i = 0; $i < count($arr); $i++) {
            echo "<li>" . $keys[$i] . " - " . $arr[$keys[$i]] . "</li>";
        }
        echo "</ul>";
    }
    function loopUsingForEach($arr) {
        echo "<ul>";

        foreach ($arr as $key => $value) {
            echo "<li>" . $key . " - " . $value . "</li>";
        }
        echo "</ul>";
    }

    /*loopUsingWhile($items);echo "<br>";
    loopUsingDoWhile($items);echo "<br>";
    loopUsingFor($items);echo "<br>";*/
    loopUsingForEach($items);

    ?>
    <hr>
    <footer>
        <p><small>Created By: Pramod Lakmal</small></p>
        <p><small><a href="http://courseweb.sliit.lk/">Visit to our course</a></small></p>
    </footer>
</body>
</html>