package com.project.taboo;
import org.junit.jupiter.api.Test;
import org.springframework.web.util.HtmlUtils;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class SanitizeTest {
    @Test
    public void test() {
        String unsafe = "<script>alert('xss')</script>";
        String safe = HtmlUtils.htmlEscape(unsafe);
        assertEquals("&lt;script&gt;alert(&#39;xss&#39;)&lt;/script&gt;", safe);
    }
}
