$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/SauceDemo_SignUp.feature");
formatter.feature({
  "line": 1,
  "name": "SauceDemo Login Functionality",
  "description": "",
  "id": "saucedemo-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login Functionality Negative test case with user name and password not provided",
  "description": "",
  "id": "saucedemo-login-functionality;login-functionality-negative-test-case-with-user-name-and-password-not-provided",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User navigates to the SwagLabs Login UI",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User waits for the application to load",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should see error message as Epic sadface: Username is required",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_navigates_to_the_SwagLabs_Login_UI()"
});
formatter.result({
  "duration": 39788230300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_waits_for_the_application_to_load()"
});
formatter.result({
  "duration": 11770500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_clicks_on_the_Login_button()"
});
formatter.result({
  "duration": 1353000,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat com.pages.SauceDemo_Pages.click_login_button(SauceDemo_Pages.java:32)\r\n\tat com.stepDefinition.SauceDemo_Login_Test.user_clicks_on_the_Login_button(SauceDemo_Login_Test.java:35)\r\n\tat ✽.And User clicks on the Login button(Feature/SauceDemo_SignUp.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_should_see_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1562621200,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login Functionality test case with user name as special characters",
  "description": "",
  "id": "saucedemo-login-functionality;login-functionality-test-case-with-user-name-as-special-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User already in the SwagLabs Login UI",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enters the user name as #@%*\u0026",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User clicks on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should see error message as Epic sadface: Password is required",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_already_in_the_SwagLabs_Login_UI()"
});
formatter.result({
  "duration": 2696300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_enters_the_user_name_as()"
});
formatter.result({
  "duration": 2206632000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_clicks_on_the_Login_button()"
});
formatter.result({
  "duration": 859676700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_should_see_error_message1()"
});
formatter.result({
  "duration": 66470000,
  "status": "passed"
});
formatter.after({
  "duration": 19400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login Functionality test case with user name as numericals",
  "description": "",
  "id": "saucedemo-login-functionality;login-functionality-test-case-with-user-name-as-numericals",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User already in the SwagLabs Login UI",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clears the username field",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters the user name as onetwothreefour",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should see error message as Epic sadface: Password is required",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_already_in_the_SwagLabs_Login_UI()"
});
formatter.result({
  "duration": 591800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_clears_the_username_field()"
});
formatter.result({
  "duration": 80501300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_enters_the_user_name_as1()"
});
formatter.result({
  "duration": 165633500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_clicks_on_the_Login_button()"
});
formatter.result({
  "duration": 70268400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_should_see_error_message1()"
});
formatter.result({
  "duration": 27152600,
  "status": "passed"
});
formatter.after({
  "duration": 20300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login Functionality test case with user name as combination of special chars and numericals",
  "description": "",
  "id": "saucedemo-login-functionality;login-functionality-test-case-with-user-name-as-combination-of-special-chars-and-numericals",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User already in the SwagLabs Login UI",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User clears the username field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enters the user name as #@onetwothreefour",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User clicks on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should see error message as Epic sadface: Password is required",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_already_in_the_SwagLabs_Login_UI()"
});
formatter.result({
  "duration": 1014000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_clears_the_username_field()"
});
formatter.result({
  "duration": 119039200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_enters_the_user_name_as_onetwothreefour()"
});
formatter.result({
  "duration": 121395100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_clicks_on_the_Login_button()"
});
formatter.result({
  "duration": 54053700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemo_Login_Test.user_should_see_error_message1()"
});
formatter.result({
  "duration": 28159900,
  "status": "passed"
});
formatter.after({
  "duration": 18300,
  "status": "passed"
});
});