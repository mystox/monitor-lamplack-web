package tech.mystox.project.monitor.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by mystox on 2019/3/21, 22:19.
 * company: kongtrolink
 * description:
 * update record:
 */
@Controller
public class TemplateController
{

    @RequestMapping("/realbowjc/home/welcome2")
    public String welcome()
    {
        return "welcome2";
    }
    @RequestMapping("/realbowjc/smoke/realtime/tablemonitor")
    public String tablemonitor()
    {
        return "tablemonitor";
    }
}
