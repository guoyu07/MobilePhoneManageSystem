package com.wfy.web.controller;

import com.wfy.web.common.ServerResponse;
import com.wfy.web.dto.ActionRoleDto;
import com.wfy.web.model.Action;
import com.wfy.web.service.IActionService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/8/26.
 */
@RestController
@RequestMapping("/action/")
public class ActionController {

    @Resource
    private IActionService iActionService;

    @RequestMapping(value = "get_actions.do", method = RequestMethod.POST)
    public ServerResponse<List<Action>> getActions(@RequestBody Map<String, Object> map) {
        List<Action> actions = iActionService.getActions();
        if (actions != null) {
            return ServerResponse.createBySuccess(actions);
        } else {
            return ServerResponse.createByErrorMessage("获取返利类型失败");
        }
    }

    @RequestMapping(value = "add_action.do", method = RequestMethod.POST)
    public ServerResponse<Action> addAction(@RequestBody Action action) {
        System.out.println(action);
        try {
            iActionService.addOrUpdateAction(action);
        } catch (Exception e) {
            e.printStackTrace();
            return ServerResponse.createByErrorMessage(e.getMessage());
        }
        return ServerResponse.createBySuccess(action);
    }

    @RequestMapping(value = "get_action.do", method = RequestMethod.GET)
    public ServerResponse<Action> getAction(String url) {
        Action action = iActionService.getActionByUrl(url);
        if (action != null) {
            return ServerResponse.createBySuccess(action);
        } else {
            return ServerResponse.createByErrorMessage("获取返利类型失败");
        }
    }


    @RequestMapping(value = "update_actions_from_role.do", method = RequestMethod.POST)
    public ServerResponse<String> updateActionsFormRole(@RequestBody ActionRoleDto actionRoleDto) {
        try {
            iActionService.updateFromRole(actionRoleDto);
        } catch (Exception e) {
            e.printStackTrace();
            return ServerResponse.createByErrorMessage("更新失败");
        }
        return ServerResponse.createBySuccess();
    }
//
//    @RequestMapping(value = "delete_action.do", method = RequestMethod.GET)
//    public ServerResponse<String> delete(String url) {
//        if (iActionService.delete(url)) {
//            return ServerResponse.createBySuccess();
//        } else {
//            return ServerResponse.createByErrorMessage("删除失败");
//        }
//    }

    @RequestMapping(value = "check_action.do", method = RequestMethod.GET)
    public ServerResponse<String> checkId(String url) {
        if (iActionService.urlExists(url)) {
            return ServerResponse.createByErrorMessage("Url已存在");
        } else {
            return ServerResponse.createBySuccess();
        }
    }
}
