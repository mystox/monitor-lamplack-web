package tech.mystox.project.monitor.web.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by mystox on 2019/3/21, 21:06.
 * company: kongtrolink
 * description:
 * update record:
 */
@RestController
public class LoginController
{
    @RequestMapping(value = "/realbowjc/login")
    String login(String username, String password, HttpServletResponse response)
    {
        try
        {
            response.sendRedirect("/realbowjc/smoke.html");
        } catch (IOException e)
        {
            e.printStackTrace();
        }
        return "smoke";
    }
}
