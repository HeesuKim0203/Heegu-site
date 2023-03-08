import { 
    projectTitle
} from 'util/text'

import { 

    ProjectContainer,
    Project,

    ProjectTitleContainer,
    ProjectTitle,

} from 'styles/HomeStyle'

function ProjectContents(props) {

    const projects = [
        {
            id : 1,
            startData : "2020.11",
            deadlineDate : "2021.07",
            name : "JRCS Software Design Section",
            description : "선박 알람 모니터링 시스템 디자인 리뉴얼 선박의 알람 모니터링 시스템 기능 추가, 사내 툴 개선 담당",
            image : ""
        },
        {
            id : 2,
            startData : "2017.12",
            deadlineDate : "2022.02",
            name : "YeungJin University Computer Information",
            description : "웹 사이트 구축, 자료구조론 등등을 공부하고 이를 기반으로 다양한 팀 프로젝트 진행 -> 자율주행 자동차, 키노코",
            image : ""
        },
    ]

    return (
        <ProjectContainer>
            <Project>
                <ProjectTitleContainer>
                    <ProjectTitle>{ projectTitle }</ProjectTitle>
                </ProjectTitleContainer>
            </Project>
        </ProjectContainer>
    );
}

export default ProjectContents ;