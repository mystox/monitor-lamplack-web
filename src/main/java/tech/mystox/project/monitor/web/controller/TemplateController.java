package tech.mystox.project.monitor.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
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
    Logger logger = LoggerFactory.getLogger(this.getClass());

    @RequestMapping("/realbowjc/home/welcome2")
    public String welcome()
    {
        return "welcome2";
    }

    /**
     * 实时监测-表格监测
     *
     * @return
     */
    @RequestMapping("/realbowjc/smoke/realtime/tablemonitor")
    public String tablemonitor()
    {
        return "tablemonitor";
    }

    /**
     * 实时监测-图表分析
     *
     * @return
     */
    @RequestMapping("/realbowjc/smoke/realtime/tablemonitor/pie")
    public String pie()
    {
        return "pie";
    }

    /**
     * 实时监测-地图监测
     *
     * @return
     */
    @RequestMapping("/realbowjc/smoke/realtime/gismonitor")
    public String gismonitor()
    {
        return "gismonitor";
    }

    /**
     * 实时监测-地图监测-数据点
     *
     * @return
     */
    @RequestMapping("/realbowjc/smoke/realtime/gismonitor/corplist")
    public String corplist()
    {
        return "corplist";
    }

    /**
     * 实时监测-地图监测-数据点详情
     *
     * @param id
     * @return
     */
    @RequestMapping("/realbowjc/smoke/realtime/gismonitor/detail/{id}")
    public String gisMonitorDetail(@PathVariable String id)
    {
        logger.info(id);
        return "detail";
    }

    /**
     * 实时监测-地图监测-企业信息
     *
     * @param id
     * @return
     */
    @RequestMapping("/realbowjc/smoke/realtime/gismonitor/corpDetail/{id}")
    public String corpDetail(@PathVariable String id)
    {
        logger.info(id);
        return "corpDetail";
    }

    /**
     * 实时监测-地图监测-设备信息
     *
     * @param id
     * @return
     */
    @RequestMapping("/realbowjc/smoke/realtime/gismonitor/deviceDetail/{id}")
    public String deviceDetail(@PathVariable String id)
    {
        logger.info(id);
        return "deviceDetail";
    }

    /**
     * 实时监测-地图监测-净化器运行时间
     */
    @RequestMapping("/realbowjc/smoke/report/groupstatcurve/runHigh/{id}")
    public String groupstatcurveRunHigh(@PathVariable String id, String beginDate, String endDate)
    {
        logger.info(id + "beginDate:" + beginDate + " endDate:" + endDate);
        return "runHighDetail";
    }

    /**
     * 预警报警-报警记录
     *
     * @return
     */
    @RequestMapping("/realbowjc/smoke/operate/smokewarning/transferWarn")
    public String transferWarn()
    {
        return "transferWarn";
    }

    /**
     * 预警报警-报警记录-详情
     *
     * @return
     */
    @RequestMapping("/realbowjc/smoke/operate/smokewarning/detail2/{id}/1")
    public String smokewarningDetail(@PathVariable String id)
    {
        return "smokewarningDetail";
    }


    /**
     * 预警报警-地图报警
     *
     * @return
     */
    @RequestMapping("/realbowjc/smoke/realtime/gissmokewarning/main")
    public String smokewarningMap()
    {
        return "smokewarningMap";
    }


    /**
     * 预警报警-地图报警
     *
     * @return
     */
    @RequestMapping("/realbowjc/smoke/realtime/gissmokewarning/corplist")
    public String smokewarningMapCorp()
    {
        return "smokewarningCorp";
    }

    /**
     * 预警报警-地图报警-数据节点详情
     *
     * @return
     */
    @RequestMapping("/realbowjc/smoke/realtime/gissmokewarning/warningDetail/{id}")
    public String warningDetail(@PathVariable String id)
    {
        return "warningDetail";
    }

    /**
     * 预警报警-报警短信记录
     *
     * @return
     */
    @RequestMapping("/realbowjc/smoke/info/smokesms/main")
    public String smokesmsMain()
    {
        return "smokesmsList";
    }

    /**
     * 预警报警-报警短信记录-详情
     *
     * @return
     */
    @RequestMapping("/realbowjc/smoke/info/smokesms/detail/{id}")
    public String smokesmsDetail(@PathVariable String id)
    {
        return "smokesmsDetail";
    }

    /**
     * 异常查询-联动比查询
     *
     * @return
     */
    @RequestMapping("/realbowjc/smoke/abnormal/runstatabnormal")
    public String abnormalRunStatabNormal()
    {
        return "abnormalRunStatabNormal";
    }

    /**
     * 企业明细信息
     *
     * @return
     */
    @RequestMapping("/realbowjc/smoke/info/smokecorp/corpInfo/{id}")
    public String abnormalRunStatabNormal(@PathVariable String id)
    {
        return "corpInfo";
    }

    /**
     * 异常查询-传输异常
     *
     * @return
     */
    @RequestMapping("/realbowjc/smoke/abnormal/transferabnormal")
    public String abnormalTransferAbnormal()
    {
        return "abnormalTransferAbnormal";
    }

    /**
     * 异常查询-传输异常-详情
     *
     * @return
     */
    @RequestMapping("realbowjc/smoke/abnormal/transferabnormal/detail/{id}")
    public String transferAbnormal(@PathVariable String id)
    {
        logger.info("异常查询-传输异常-详情" + id);
        return "transferAbnormal";
    }

    /**
     * 异常查询-超标异常企业
     *
     * @return
     */
    @RequestMapping("/realbowjc/smoke/report/dischargepurifystat/main")
    public String dischargepurifystatMain()
    {
        logger.info("异常查询-超标异常企业");
        return "dischargepurifystatMain";
    }

    /**
     * 异常查询-超标异常企业
     *
     * @return
     */
    @RequestMapping("/realbowjc/smoke/report/dischargepurifystat/detail/{id}")
    public String dischargepurifystatDetail()
    {
        logger.info("异常查询-传输异常-详情");
        return "dischargepurifystatDetail";
    }


}
