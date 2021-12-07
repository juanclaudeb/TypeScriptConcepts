Feature: Login to website test

    Login different users for website

    Scenario: Login to website
        Given I am at the test page
        And I insert the firstname value
        And I insert the lastname value
        And I insert the email value
        And I tick the Male radio button
        And I insert the mobile number value
        And I insert the date of birth value
        And I insert the subjects value
        And I tick the music checkbox
        And I upload the image file
        And I insert the current address value
        And I select the state value
        And I select the city value
        And I click the submit button
        Then I close the summary form