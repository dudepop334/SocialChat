// PostService.java
import static spark.Spark.*;

public class PostService {
    public static void main(String[] args) {
        post("/create", (req, res) -> {
            String body = req.body();
            // Save post or send to core
            return "Post received: " + body;
        });
    }
}
