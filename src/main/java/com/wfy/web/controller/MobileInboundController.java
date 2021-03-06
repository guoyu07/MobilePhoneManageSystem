package com.wfy.web.controller;

import com.wfy.web.common.ServerResponse;
import com.wfy.web.model.MobileInbound;
import com.wfy.web.model.MobileStock;
import com.wfy.web.model.Token;
import com.wfy.web.model.User;
import com.wfy.web.model.enums.CheckStatus;
import com.wfy.web.service.IBrandService;
import com.wfy.web.service.IMobileInboundService;
import com.wfy.web.utils.RefCount;
import com.wfy.web.utils.TokenUtil;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/8/26.
 */
@RestController
@RequestMapping("/mobile_inbound/")
public class MobileInboundController {

    @Resource
    private IMobileInboundService iMobileInboundService;

    @Resource
    private IBrandService.IMobileStockService iMobileStockService;

    @RequestMapping(value = "get_mobile_inbounds.do", method = RequestMethod.POST)
    public ServerResponse<List<MobileInbound>> getMobileInbounds(@RequestBody Map<String, Object> map) {
        //TODO 可以增加按supplierType、brand以及status(使用checkbox)的查询的方式，提升用户体验
        String supplier = (String) map.get("supplier");
        String mobileModel = (String) map.get("mobileModel");
        Integer pageIndex = (Integer) map.get("pageIndex");
        Integer pageSize = (Integer) map.get("pageSize");
        Long startTimeL = (Long) map.get("startTime");
        Long endTimeL = (Long) map.get("endTime");
        Date startTime = (startTimeL != null) ? new Date(startTimeL) : null;
        Date endTime = (endTimeL != null) ? new Date(endTimeL) : null;
        RefCount refCount = new RefCount(0);
        List<MobileInbound> mobileInbounds;
        mobileInbounds = iMobileInboundService.getMobileInbounds(refCount, startTime, endTime, supplier, mobileModel, pageIndex, pageSize);
        //noinspection Duplicates
        if (mobileInbounds != null) {
            ServerResponse<List<MobileInbound>> response = ServerResponse.createBySuccess(mobileInbounds);
            response.setCount(refCount.getCount());
            return response;
        } else {
            return ServerResponse.createByErrorMessage("获取手机型号失败");
        }
    }

    @RequestMapping(value = "add_mobile_inbound.do", method = RequestMethod.POST)
    public ServerResponse<MobileInbound>
    addMobileInbound(@RequestBody MobileInbound mobileInbound, HttpServletRequest request) {
        try {
            mobileInbound.setStatus(CheckStatus.UNAUDITED);
            for (int i = 0; i < mobileInbound.getMobiles().size(); i++) { // 将每个手机入库
                MobileStock mobile = mobileInbound.getMobiles().get(i);
                mobile.setBuyPrice(mobileInbound.getBuyPrice());
                mobile.setColor(mobileInbound.getColor());
                mobile.setConfig(mobileInbound.getConfig());
                mobile.setCost(mobileInbound.getBuyPrice());
                mobile.setDept(mobileInbound.getDept());
                mobile.setFirstInTime(mobileInbound.getInputTime());
                mobile.setFirstSupplier(mobileInbound.getSupplier());
                mobile.setLossAmount(0);
                mobile.setMobileModel(mobileInbound.getMobileModel());
                mobile = iMobileStockService.addMobileStock(mobile);
                mobileInbound.getMobiles().set(i, mobile);
            }
            Token token = TokenUtil.getTokenfromRequest(request);
            if (token != null) {
                mobileInbound.setInputUser(new User(token.getUserId()));
            }
            mobileInbound.setInputTime(new Date(System.currentTimeMillis()));
            mobileInbound = iMobileInboundService.addMobileInbound(mobileInbound); // 持久化入库单
            for (MobileStock mobile : mobileInbound.getMobiles()) {
                mobile.setMobileInbound(mobileInbound); //把有Id的mobileInbound外键设回去
                iMobileInboundService.updateMobileInbound(mobileInbound);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ServerResponse.createByErrorMessage("添加失败");
        }
        return ServerResponse.createBySuccess(mobileInbound);
    }

    @RequestMapping(value = "recover_mobile_inbound.do", method = RequestMethod.GET)
    public ServerResponse<String> recoverMobileInbound(String id) {
        if (iMobileInboundService.recover(id)) {
            return ServerResponse.createBySuccess();
        } else {
            return ServerResponse.createByErrorMessage("恢复失败");
        }
    }

    @RequestMapping(value = "get_mobile_inbound.do", method = RequestMethod.GET)
    public ServerResponse<MobileInbound> getMobileInbound(String id) {
        MobileInbound mobileInbound = iMobileInboundService.getMobileInboundById(id);
        if (mobileInbound != null) {
            return ServerResponse.createBySuccess(mobileInbound);
        } else {
            return ServerResponse.createByErrorMessage("获取手机型号失败");
        }
    }

    @RequestMapping(value = "pass_mobile_inbound.do", method = RequestMethod.GET)
    public ServerResponse<String> passMobileInbound(String id, HttpServletRequest request) {
        try {
            MobileInbound mobileInbound = iMobileInboundService.getMobileInboundById(id);
            mobileInbound.setStatus(CheckStatus.PASSED);
            Token token = TokenUtil.getTokenfromRequest(request);
            if (token != null) {
                mobileInbound.setCheckUser(new User(token.getUserId()));
            }
            mobileInbound.setCheckTime(new Date(System.currentTimeMillis()));
            System.out.println(mobileInbound);
            iMobileInboundService.updateMobileInbound(mobileInbound);
        } catch (Exception e) {
            e.printStackTrace();
            return ServerResponse.createByErrorMessage("更新失败");
        }
        return ServerResponse.createBySuccess();
    }

    @RequestMapping(value = "refuse_mobile_inbound.do", method = RequestMethod.GET)
    public ServerResponse<String> refuseMobileInbound(String id, HttpServletRequest request) {
        try {
            MobileInbound mobileInbound = iMobileInboundService.getMobileInboundById(id);
            mobileInbound.setStatus(CheckStatus.NOT_PASSED);
            Token token = TokenUtil.getTokenfromRequest(request);
            if (token != null) {
                mobileInbound.setCheckUser(new User(token.getUserId()));
            }
            mobileInbound.setCheckTime(new Date(System.currentTimeMillis()));
            System.out.println(mobileInbound);
            iMobileInboundService.updateMobileInbound(mobileInbound);
        } catch (Exception e) {
            e.printStackTrace();
            return ServerResponse.createByErrorMessage("更新失败");
        }
        return ServerResponse.createBySuccess();
    }

    @RequestMapping(value = "delete_mobile_inbound.do", method = RequestMethod.GET)
    public ServerResponse<String> delete(String id) {
        if (iMobileInboundService.delete(id)) {
            return ServerResponse.createBySuccess();
        } else {
            return ServerResponse.createByErrorMessage("删除失败");
        }
    }

    @RequestMapping(value = "check_mobile_inbound.do", method = RequestMethod.GET)
    public ServerResponse<String> checkId(String id) {
        if (iMobileInboundService.idExists(id)) {
            return ServerResponse.createByErrorMessage("编号已存在");
        } else {
            return ServerResponse.createBySuccess();
        }
    }

}
