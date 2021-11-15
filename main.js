importClass(android.provider.Settings);
importClass(android.content.Context);
auto.waitFor()
const { msg } = hamibot.env;


function isLocked() {
    var km = context.getSystemService(Context.KEYGUARD_SERVICE);
    return km.isKeyguardLocked() && km.isKeyguardSecure();
}
if (isLocked()){
if (!device.isScreenOn()) {//息屏状态将屏幕唤醒
    device.wakeUp();//唤醒设备
    sleep(1000); // 等待屏幕亮起
    swipe(500, 30, 500, 1000, 300);
    sleep(400);
    click(100, 120);
    desc(msg[0]).findOne().click();
    desc(msg[1]).findOne().click();
    desc(msg[2]).findOne().click();
    desc(msg[3]).findOne().click();
    desc(msg[4]).findOne().click();
    desc(msg[5]).findOne().click();
    back();
 
}
}
sleep(2000);
launch('com.alibaba.android.rimet');
id("home_bottom_tab_button_work").findOne().click()
sleep(4000);
desc('健康打卡')
  .findOne()
  .click();
desc('今日是否在校？ Are you on campus today?')
  .findOne()
  .parent().children().findOne(desc('是 Yes'))
   .click();
desc('本人家庭成员(包括其他密切接触人员)是否有近14日入境或近14日拟入境的情况？Have your family members (including other close contact persons）entered Chinese Mainland over the past 14 days or plan to enter Chinese Mainland in 14 days?')
  .findOne()
  .parent().children().findOne(desc('否 No'))
   .click();
desc('本人承诺：')
  .findOne()
  .click();
desc('所在地点（请打开手机位置功能，并在手机权限设置中选择允许访问位置信息）Your location (Please turn on the location access function on your mobile phone and allow App to access your location)')
  .findOne()
  .click();
sleep(4000);
desc('提交信息 Submit information')
  .findOne()
  .click();
desc('确认提交')
  .findOne()
  .click();
home();
