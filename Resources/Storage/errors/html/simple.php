<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex,nofollow"/>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Something Went Wrong</title>
  <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
  <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    <?php include 'style.css';
    ?>
  </style>
</head>
<body>
  <aside class="error-view">
    <header>
    <span id="err-404">Error: </span><span id="message"><?= $message ?></span>
    </header>
    <div class="error-msg">
    <?php if (!$description) {
        echo "<span id='empty'></span";
    } else {
        echo "<span id='err-msg'>$description</span>";
    }
            ?>
    </div>
  </aside>
</body>
</html>