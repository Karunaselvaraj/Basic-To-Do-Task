<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do Task</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100vh;
            color: #333;
        }

        h1 {
            margin-top: 20px;
            margin-bottom: 20px;
            font-size: 55px;
            color: #000000;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .input-container {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 20px;
        }

        input[type="text"] {
            width: 400px; 
            padding: 15px;
            border: 2px solid #ddd;
            border-radius: 16px;
            font-size: 18px;
            outline: none;
            box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
            transition: border-color 0.3s ease;
        }

        input[type="text"]:focus {
            border-color: #99ea9c;
        }

        button {
            width: 120px; /* Increased button width */
            padding: 15px;
            font-size: 16px;
            color: rgb(0, 0, 0);
            background-color: #23ff2b;
            border: none;
            border-radius: 16px;
            cursor: pointer;
            box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #388e3c;
        }

        ul {
            list-style: none;
            padding: 0;
            margin-top: 20px;
            width: 600px; /* Increased width for tasks list */
        }

        ul li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #fff;
            padding: 15px 20px;
            margin-bottom: 10px;
            border-radius: 18px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            font-size: 18px;
        }

        ul li button {
            background-color: #ff4141;
            padding: 8px 15px;
            border: none;
            border-radius: 18px;
            font-size: 14px;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        ul li button:hover {
            background-color: #d32f2f;
        }
    </style>
</head>
<body><br><br><br>
    <h1>To-Do Task</h1><br><br>
    <div class="input-container">
        <input type="text" id="inp" placeholder="Enter a task">
        <button onclick="add()">Add</button>
    </div>
    <ul>
    </ul>
    <script>
        var user = document.getElementById("inp");
        var ul = document.querySelector("ul");
        function add() {
            var a = document.createElement("li");
            a.innerHTML = user.value + "<button onclick='del(event)'>delete</button>";
            ul.append(a);
        }
        function del(event) {
            event.target.parentElement.remove();
        }
    </script>
</body>
</html>
