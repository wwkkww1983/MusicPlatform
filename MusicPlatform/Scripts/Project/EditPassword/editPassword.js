﻿'use strict'

layui.config({
    base: '/Scripts/Project/EditPassword/' //静态资源所在路径
}).use(['form'], function () {
    var form = layui.form;

    //监听修改按钮
    $("#submit").click(function () {
        if ($('#newPw').val() != $('#againPw').val()) {
            layer.msg("两次新密码不一致，请重新输入!");
            return false;
        }
        if ($('#user_power', parent.document).val() === "用户") {
            $.ajax({
                url: "/Info/EditUserPassword",
                dataType: "json",
                type: "post",
                data: {
                    password: $('#newPw').val(),
                    id: $('#user_id', parent.document).val(),
                },
                success: function (res) {
                    if (res.code === 200) {
                        layer.alert("修改成功!", function (index) {
                            window.location.reload();
                        });
                    }
                    else if (res.code === 402) {
                        layer.alert("修改失败!");
                    }
                },
            });
        }
        else if ($('#user_power', parent.document).val() === "管理员") {
            $.ajax({
                url: "/Info/EditAdminPassword",
                dataType: "json",
                type: "post",
                data: {
                    password: $('#newPw').val(),
                    id: $('#user_id', parent.document).val(),
                },
                success: function (res) {
                    if (res.code === 200) {
                        layer.alert("修改成功!", function (index) {
                            window.location.reload();
                        });
                    }
                    else if (res.code === 402) {
                        layer.alert("修改失败!");
                    }
                },
            });
        }
    });
});