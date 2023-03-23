<!--
Copyright 2020 -     Robot Framework Foundation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

This code was derived from https://github.com/robotframework/robotframework.github.com
-->

<template>
    <div class="row no-gutters">
     <div class="col-md-2">
         <navigation-vertical :pages="pages"/>
     </div>

    <div class="col-md-10" id="scroller"
    ref="content" style="position:relative;height:100vh;overflow-y:scroll;overflow-x:hidden;-webkit-overflow-scrolling: touch;">
        <app-header/>
        <page-block v-for="(page, index) in pages.filter(page => page.data)"
          v-bind:page="page"
          v-bind:index="index"
          v-bind:key="index"
          class="pl-md-5 px-lg-2 p-sm-3 py-2 p-xs-1"/>
      </div>
    </div>
</template>
<script>
import PageBlock from "@/components/PageBlock.vue";
import marked from 'marked';

const infoText = marked(`

We are looking for a technical writer. This project is part of the [Google Season of Docs](https://developers.google.com/season-of-docs) initiative.  

If you are interested in becoming the technical writer or have any questions regarding the project, please do not hesitate to contact us:  

Miikka Solmela  
Executive Director, Robot Framework Foundation  
executive.director@robotframework.org 
`)

const introText = marked(`Robot Framework is a generic open source automation framework. It can be used for test automation and robotic process automation (RPA). Robot Framework is open and extensible – it can be integrated with virtually any other tool to create powerful and flexible automation solutions.  

Robot Framework is supported by the Robot Framework Foundation. Robot Framework Foundation is a non-profit consortium that fosters the growth of Robot Framework. It was founded by companies with a common interest to ensure the development of Robot Framework now and in the future.  

Robot Framework was initially developed at Nokia Networks around 2005. When Nokia decided to drop the development, the Foundation was established by a group of user companies who believed in the tool and wanted to continue the funding. Hence, in 2015 the Foundation took over the development and maintenance and the number of Foundation members has grown from the original 7 to 50+ as of today. Moreover, we have a vibrant community in Slack and hundreds of thousands of users all over the globe. 

Our [User Guide](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html) is one of the main resources and during the past 12 months some 500 thousand people have visited that page. Unfortunately, the current User Guide is not up to par and we would need help to update it in order to better serve our community and the people who use our great tool.
`)

const ourProjectIssue = marked(`

There are few issues with the current [User Guide](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html).  


#### Content
The content could be modernized. Some of the examples, although still correct, are from the very early days of the project.  

#### Structure and writing style
The structure is now a mix of technical guide (manual) and a quick start guide with examples. We have created a separate ["Docs" site](https://docs.robotframework.org/docs) for examples and more hands-on material and we would see fit to move the examples from the User Guide there, making the User Guide a more of a technical manual. Overall, we see that the User Guide structure should be revised and possibly re-organized and the document re-written at least partly.  

#### Documentation platform

The User Guide is currently hosted as a static HTML page under GitHub pages. Part of the overall
User Guide modernization project is moving it to a dedicated documentation platform that natively
supports search, glossary, showing documentation for different Robot Framework versions, and so on.
Alternatives include [Docusaurus](https://docusaurus.io), that we use with the aforementioned
[Guides](https://docs.robotframework.org/docs), and [Read the Docs](https://readthedocs.org/),
that is used with the [API documentation](https://robot-framework.readthedocs.io).

Deciding the documentation platform needs to be done in collaboration with the Robot Framework
core development team that will use the said platform in their daily work afterwards.
A part of this is making sure that the latest documentation is automatically build after changes.
Setting the platform and needed integrations can be considered a separate project and the technical
writer does not need to be responsible on it.

#### Visuals
The User Guide should be more visually appealing. The User Guide can be a bit off-putting for new users just learning about the tool and landing on the page. Part of the project is making the visuals more appealing and the overall document more approachable.  

#### Conclusion

All of the above mentioned changes would help us to better serve the Robot Framework users, whether beginners or advanced, to find what they are looking for and solve their Robot Framework issues. `)

const projectScope = marked(`The update and restructure Robot Framework User Guide project will:

- audit the existing User Guide and evaluate to what extent we need new content and how to improve the current content
- write new content and update existing content of the User Guide for the relevant parts identified  
- evaluate and change the structure of the User Guide 
- bring the new User Guide onto the selected documentation platform

In the project team, we will have a project manager, community members, our webmaster and our main developer to support the technical writer.  

We estimate it takes 6 months to complete the project. 


#### Measuring your project's success

Overall, the project is successful if we have a clearly structured updated User Guide in a visually appealing format with a clear distinction between the User Guide and Docs.  

In order to know if people like the new User Guide, we should conduct a community survey or add questions about it in our bi-annual survey.  

Moreover, one indication of a successful project could be the reduction of the bounce rate on the User Guide page, which is currently 36%. Some of this comes from factors outside of the project scope, but part of the bounce rate can be due to the structure, visuals and other attributes of the current User Guide, which does not invite people to stay on the page.  

#### Timeline

The project itself will take approximately six months to complete. Once the technical writer is hired, we'll spend a few weeks on the orientation, then move onto the audit phase, and then spend a few months on creating the new User Guide content and lastly getting that into Docusaurus.  

| Tentative dates | Action Items |
| --- | --- |
| May | Orientation |
| June - August | Audit existing documentation and create friction log |
| September - October | Create User Guide |
| November | Project completion |`)

const projectBudget = marked(`
| Budget item | Amount | Running Total | Notes/justifications |
| --- | --- | --- | --- |
| Technical writer audit, update, test, and publish new User Guide | 10500.00 | 10500.00 | Let's hope this is enough. |
| Web development | 1500.00 | 12000.00 | Our webmaster's work to have help with Docusaurus |
| Main developer | 1500.00 | 13500.00 | Our main developer to give introduction to the current Docs;  help with the new ones |
| Project implementation in Docusaurus | 1500.00 | 15000.00 | Getting the new updated User Guide to Docusaurus |
| TOTAL |  | 15000.00 | USD  |`)

const additionInformation = marked(`The main developer, who will also be part of the work group, has written the current User Guide and can help with any questions and also can provide an introduction to the topic as well as other help with the current documentation and transition to the new format.  

Moreover, one of the work group members is the main author of our Docs, and is also available to help to transform and implement the updated User Guide content to Docusaurus platform. Lastly, project management and administration is provided by the Executive Director of the Robot Framework Foundation.  `)


export default {
  components: {
    PageBlock
  },
  data() {
    return {
      pages: [
        {
          title: "Info",
          text_block: true,
          tab_box: false,
          member_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Info",
              text: infoText

            }
          }
        },
        {
          title: "About Us",
          text_block: true,
          tab_box: false,
          member_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "About Us",
              text: introText

            }
          }
        },
        {
          title: "Project",
          text_block: true,
          tab_box: false,
          member_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Project Issues",
              text: ourProjectIssue

            }
          }
        },
        {
          title: "Project Scope",
          text_block: true,
          tab_box: false,
          member_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Project Scope",
              text: projectScope

            }
          }
        },
        {
          title: "Project Budget",
          text_block: true,
          tab_box: false,
          member_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Project Budget",
              text: projectBudget

            }
          }
        },
        {
          title: "Additional Information",
          text_block: true,
          tab_box: false,
          member_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Additional Information",
              text: additionInformation

            }
          }
        },
        /*
        {
          title: "RoboCon-Talk",
          text_block: true,
          tab_box: false,
          member_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Intro-Talk",
              text: `<p>Browser team gave this introduction talk at RoboCon 2021.</p>
              <iframe  width=640 height=360 src="https://www.youtube-nocookie.com/embed/3BNVS6uiFeo" title="Browser-Intro-Talk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              `
            }
          }
        },

        {
          title: "Architecture",
          text_block: false,
          tab_box: false,
          feature_box: true,
          twitter: false,
          hide_from_nav: true,
          data: {
            text: [
              {
                header: "🚀SPEED",
                text:
                  "<p> Robot Framework Browser is fast! With its direct API to the browsers, designed for high performance testing, fast feedback is now only limited by the speed of the test object. </p> <p>With its inovative Context concept, a clean browser session is started within a less than 10 milliseconds! </p><p> Learn more about <a href='https://marketsquare.github.io/robotframework-browser/Browser.html#Browser%2C%20Context%20and%20Page' target='_blank'>Browser/Contexts/Pages</a>. </p>Browser library is designed to run headless first and brings a ready-to-test docker image to scale your test environments with your needs.</p>"
              },
              {
                header: "✅RELIABILITY",
                text:
                  "<p><code>Wait Until ...</code> and <code>Sleep</code> keywords belong to the past. </p> <p> The browser library automatically waits for the elements of the page and interacts with them when they are ready for interaction. </p> <p>Flickering tests that are sometimes PASS and sometimes FAIL are drastically reduced and confidence in test automation increases!</p> <p>Find real errors instead of fixing your tests...</p> "
              },
              {
                header: "🔬VISIBILITY",
                text: "<p> Robot Framework Browser utilizes a JavaScript based technology called Playwright. Playwright connects directly to the browsers API and has <b>full control</b> of the browser and its content. The Users has full access to all JavaScript object of the page and with the <code>Execute JavaScript</code> keyword you can directly manipulate them.</p> <p>Browser has also access to the Network Traffic between page and server and gives the user the possibility to interact with the server via HTTP calls from the same browser session.</p> <p>You have never been closer to your test object!</p>"
              }
            ]
          }
        },
        {
          title: "Community",
          text_block: true,
          community_block: true,
          feature_box: false,
          data: {
            text: {
              header: "Community",
              text: "Join the Browser community and help us shape its development."
            },
            items: [
              {
                title: 'community',
                items: [
                  {
                    img: require("@/assets/img/ROBOTFW_Mark_Black_LOW.png"),
                    title: 'Forum',
                    href: 'https://forum.robotframework.org/c/libraries/browser',
                    text: "Browser library's section on the Robot Framework forum."
                  },
                  {
                    img: require("@/assets/img/slack.png"),
                    title: 'Slack',
                    href: 'http://robotframework.slack.com',
		            text: 'Community team chat. Get an <a href="https://rf-invite.herokuapp.com/" target="_blank">invite to the workspace.</a>. Then join <a href="https://robotframework.slack.com/#browser">our channel #browser</a>.'
                  }
                ]
              }
            ]
          }
        },
        {
          title: "Keyword Docs",
          text_block: true,
          tab_box: false,
          url: 'https://marketsquare.github.io/robotframework-browser/Browser.html',
          feature_box: false
        },
        {
          title: "Github Project",
          text_block: true,
          tab_box: false,
          url: 'https://github.com/MarketSquare/robotframework-browser#robotframework-browser',
          feature_box: false
        },
        {
          title: "Robot Framework",
          text_block: true,
          tab_box: false,
          url: 'https://robotframework.org/',
          feature_box: false
        },
        {
          title: "Playwright",
          text_block: true,
          tab_box: false,
          url: 'https://playwright.dev/',
          feature_box: false
        },*/
      ]
    };
  }
};
</script>
