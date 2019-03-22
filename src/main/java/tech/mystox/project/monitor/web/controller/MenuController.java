package tech.mystox.project.monitor.web.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by mystox on 2019/3/21, 22:14.
 * company: kongtrolink
 * description:
 * update record:
 */
@RestController
public class MenuController
{
    @RequestMapping("/realbowjc/getshortmenu/smoke")
    public String getshortmenu()
    {
        return "[{\"id\":\"4028d03b464a99a101464ae314cf0001\",\"menuName\":\"表格监测\",\"menuUrl\":\"smoke/realtime/tablemonitor\",\"imagePath\":\"shortcutIcon/Tab001.png\"},{\"id\":\"4028d03b464a99a101464ae3801f0002\",\"menuName\":\"地图监测\",\"menuUrl\":\"smoke/realtime/gismonitor\",\"imagePath\":\"shortcutIcon/Map001.png\"},{\"id\":\"4028d04746addc720146ade4578f0001\",\"menuName\":\"数据传输异常\",\"menuUrl\":\"smoke/abnormal/transferabnormal\",\"imagePath\":\"shortcutIcon/ShuJuChuanShu001.png\"}]";
    }

    @RequestMapping("/realbowjc/sysadmin/security/user/getnowskin")
    public String getnowskin()
    {
        return "greenskins";
    }

}
