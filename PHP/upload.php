php
<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $imageName = $_POST["imageName"];
    $imageFile = $_FILES["imageFile"];

    // Define max file size (e.g., 5MB)
    $maxFileSize = 5 * 1024 * 1024; // 5MB in bytes we can make this change hehe

    // Check if file was uploaded without errors
    if ($imageFile["error"] === UPLOAD_ERR_OK) 
    {

        //Check if the file is an image
        $check = getimagesize($imageFile["tmp_name"]);
        if ($check === false) 
        {
            echo "Error: Uploaded file is not a valid image.";
        }
        else
        {
            // Check file size
            if ($imageFile["size"] > $maxFileSize) 
            {
                echo "Error: File size exceeds the maximum limit of 5MB.";
            } 
            else 
            {
                // File is valid, proceed with saving
                $uploadDir = "../images/"; // Directory to save uploaded images
                $uploadPath = $uploadDir . basename($imageFile["name"]);

                // Create upload directory if it doesn't exist
                if (!is_dir($uploadDir)) 
                {
                    mkdir($uploadDir);
                }

                // Move the uploaded file to the desired location
                if (move_uploaded_file($imageFile["tmp_name"], $uploadPath)) 
                {
                    echo "File uploaded successfully!";
                    // You can now save $imageName and $uploadPath to a database
                } 
                else 
                {
                    echo "Error uploading file.";
                }
            }
        } 
    } 
    else 
    {
        echo "Error during file upload: " . $imageFile["error"];
    }
} 
else 
{
    echo "Invalid request.";
}

?>