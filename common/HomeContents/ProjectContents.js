import { projectTitle } from 'util/text'
import TitleComponent from 'common/HomeContents/Components/TitleComponent'
import { 

    ProjectContainer,
    Project,

    ProjectItemsContainer,
    ProjectMainItems,
    ProjectSubItems,

    ProjectMainItemsImage,
    ProjectMainItemsTextArea,
    ProjectMainItemsTitle,
    ProjectMainItemsResponsibility,
    ProjectMainItemsDescription,
    ProjectMainItemsSkillContainer,
    ProjectMainItemsSkill,

    ProjectSubItemsImage,
    ProjectSubItemsTextArea,
    ProjectSubItemsTitle,
    ProjectSubItemsIntroduction,
    ProjectSubItemsDate,

} from 'styles/HomeStyle'

function ProjectContents(props) {

    const project = [
        {
            id : 1,
            startDate : "2022.03",
            deadlineDate : "2023.02",
            responsibility : "실시간 통신 데이터 화면, 제어 시스템 화면, 액정과 시리얼 통신담당",
            skill : [ "Javascript", "React", "Node.js", "Next.js" ],
            image : "",
            teamMembers : "5",
            name : "AMS Design Renewal",
            description : "기존 AMS는 4:3의 화면을 사용하고 있었지만 16:9의 화면에 대한 고객들의 요구가 있어서 개발하게 됨, 개발을 계기로 오래된 디자인을 개편하고 기능적인 부분들도크게 기존 AMS는 4:3의 화면을 사용하고 있었지만 16:9의 화면에 대한 고객들의 요구가 있어서 개발하게 됨 사용하고 있었지만 16:9의 화면에 대한 고객들의 요구가 있어서 개발하게 됨",
            Learned : "높은 응집도와 낮은 결합도는 객체 지향적으로 생각하면 추구해야할 설계 방향이다. 좋은 코드를 설계하기 위해 ’객체 지향 방법론’ 이라는 SOLID 원칙....높은 응집도와 낮은 결합도는 객체 지향적으로 생각하면 추구해야할 설계 방향이다. 좋은 코드를 설계하기 위해 ’객체 지향 방법론’ 이라는 SOLID 원칙....좋은 코드를 설계하기 위해 ’객체 지향 방법론’ 이라는 SOLID 원칙....좋은 코드를 설계하기 위해 ’객체 지향 방법론’ 이라는 SOLID 원칙....",
            Introduction : "선박의 센서 데이트를 모아서 볼수 있는 AMS 디자인 리뉴얼 및 기능 추가"
        },
        {
            id : 2,
            startDate : "2022.03",
            deadlineDate : "2023.02",
            responsibility : "실시간 통신 데이터 화면, 제어 시스템 화면, 액정과 시리얼 통신담당",
            skill : [ "Javascript", "React", "Node.js", "Next.js" ],
            image : "",
            teamMembers : "5",
            name : "AMS Design Renewal",
            description : "기존 AMS는 4:3의 화면을 사용하고 있었지만 16:9의 화면에 대한 고객들의 요구가 있어서 개발하게 됨, 개발을 계기로 오래된 디자인을 개편하고 기능적인 부분들도크게 기존 AMS는 4:3의 화면을 사용하고 있었지만 16:9의 화면에 대한 고객들의 요구가 있어서 개발하게 됨...",
            learned : "높은 응집도와 낮은 결합도는 객체 지향적으로 생각하면 추구해야할 설계 방향이다. 좋은 코드를 설계하기 위해 ’객체 지향 방법론’ 이라는 SOLID 원칙....높은 응집도와 낮은 결합도는 객체 지향적으로 생각하면 추구해야할 설계 방향이다. 좋은 코드를 설계하기 위해 ’객체 지향 방법론’ 이라는 SOLID 원칙....좋은 코드를 설계하기 위해 ’객체 지향 방법론’ 이라는 SOLID 원칙....좋은 코드를 설계하기 위해 ’객체 지향 방법론’ 이라는 SOLID 원칙....",
            introduction : "선박의 센서 데이트를 모아서 볼수 있는 AMS 디자인 리뉴얼 및 기능 추가"
        },
        {
            id : 3,
            startDate : "2022.03",
            deadlineDate : "2023.02",
            responsibility : "실시간 통신 데이터 화면, 제어 시스템 화면, 액정과 시리얼 통신담당",
            skill : [ "Javascript", "React", "Node.js", "Next.js" ],
            image : "",
            teamMembers : "5",
            name : "AMS Design Renewal",
            description : "기존 AMS는 4:3의 화면을 사용하고 있었지만 16:9의 화면에 대한 고객들의 요구가 있어서 개발하게 됨, 개발을 계기로 오래된 디자인을 개편하고 기능적인 부분들도크게 기존 AMS는 4:3의 화면을 사용하고 있었지만 16:9의 화면에 대한 고객들의 요구가 있어서 개발하게 됨...",
            learned : "높은 응집도와 낮은 결합도는 객체 지향적으로 생각하면 추구해야할 설계 방향이다. 좋은 코드를 설계하기 위해 ’객체 지향 방법론’ 이라는 SOLID 원칙....높은 응집도와 낮은 결합도는 객체 지향적으로 생각하면 추구해야할 설계 방향이다. 좋은 코드를 설계하기 위해 ’객체 지향 방법론’ 이라는 SOLID 원칙....좋은 코드를 설계하기 위해 ’객체 지향 방법론’ 이라는 SOLID 원칙....좋은 코드를 설계하기 위해 ’객체 지향 방법론’ 이라는 SOLID 원칙....",
            introduction : "선박의 센서 데이트를 모아서 볼수 있는 AMS 디자인 리뉴얼 및 기능 추가"
        },
        {
            id : 4,
            startDate : "2022.03",
            deadlineDate : "2023.02",
            responsibility : "실시간 통신 데이터 화면, 제어 시스템 화면, 액정과 시리얼 통신담당",
            skill : [ "Javascript", "React", "Node.js", "Next.js" ],
            image : "",
            teamMembers : "5",
            name : "AMS Design Renewal",
            description : "기존 AMS는 4:3의 화면을 사용하고 있었지만 16:9의 화면에 대한 고객들의 요구가 있어서 개발하게 됨, 개발을 계기로 오래된 디자인을 개편하고 기능적인 부분들도크게 기존 AMS는 4:3의 화면을 사용하고 있었지만 16:9의 화면에 대한 고객들의 요구가 있어서 개발하게 됨...",
            learned : "높은 응집도와 낮은 결합도는 객체 지향적으로 생각하면 추구해야할 설계 방향이다. 좋은 코드를 설계하기 위해 ’객체 지향 방법론’ 이라는 SOLID 원칙....높은 응집도와 낮은 결합도는 객체 지향적으로 생각하면 추구해야할 설계 방향이다. 좋은 코드를 설계하기 위해 ’객체 지향 방법론’ 이라는 SOLID 원칙....좋은 코드를 설계하기 위해 ’객체 지향 방법론’ 이라는 SOLID 원칙....좋은 코드를 설계하기 위해 ’객체 지향 방법론’ 이라는 SOLID 원칙....",
            introduction : "선박의 센서 데이트를 모아서 볼수 있는 AMS 디자인 리뉴얼 및 기능 추가"
        }
    ]

    const projectMain = project[0] ;
    const projectSub = [ ...project.slice(1, project.length) ] ;

    return (
        <ProjectContainer>
            <Project>
                <TitleComponent title = { projectTitle } />
                <ProjectItemsContainer>
                    <ProjectMainItems>
                        <ProjectMainItemsImage />
                        <ProjectMainItemsTextArea>
                            <ProjectMainItemsTitle> { projectMain.name } </ProjectMainItemsTitle>
                            <ProjectMainItemsResponsibility> { projectMain.responsibility } </ProjectMainItemsResponsibility>
                            <ProjectMainItemsDescription> { projectMain.description } </ProjectMainItemsDescription>
                            <ProjectMainItemsSkillContainer>
                                { projectMain.skill.map((value, index) => {
                                    return(
                                        <ProjectMainItemsSkill key = { index } > { value } </ProjectMainItemsSkill>
                                    ) ;
                                }) }
                            </ProjectMainItemsSkillContainer>
                        </ProjectMainItemsTextArea>
                    </ProjectMainItems>
                    { projectSub.map((value, index) => {
                        return (
                            <ProjectSubItems 
                                key = { index }
                                row = { index }
                            >
                                <ProjectSubItemsImage />
                                <ProjectSubItemsTextArea>
                                    <ProjectSubItemsTitle> { value.name } </ProjectSubItemsTitle>
                                    <ProjectSubItemsIntroduction> { value.introduction } </ProjectSubItemsIntroduction>
                                    <ProjectSubItemsDate> { `${value.startDate} ~ ${value.deadlineDate}` } </ProjectSubItemsDate>
                                </ProjectSubItemsTextArea>
                            </ProjectSubItems>
                        ) ;
                    }) }
                </ProjectItemsContainer>
            </Project>
        </ProjectContainer>
    );
}

export default ProjectContents ;