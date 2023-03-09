import { careerTitle } from 'util/text'
import TitleComponent from 'common/HomeContents/Components/TitleComponent'
import { 
    
    CareerContainer,
    Career,

    CareerItemsContainer,
    CarerrItems,

    CarerrTextArea,
    CarerrItemsImage,
    CarerrItemsTitle,
    CarerrItemsDescription

} from 'styles/HomeStyle'

function CareerContents(props) {

    const career = [
        {
            id : 1,
            startData : "2020.11",
            deadlineDate : "2021.07",
            name : "JRCS Software Design Section",
            description : "선박 알람 모니터링 시스템 디자인 리뉴얼\n선박의 알람 모니터링 시스템 기능 추가, 사내 툴 개선 담당",
            image : ""
        },
        {
            id : 2,
            startData : "2017.12",
            deadlineDate : "2022.02",
            name : "YeungJin University Computer Information",
            description : "웹 사이트 구축, 자료구조론 등등을 공부하고 이를 기반으로\n다양한 팀 프로젝트 진행 -> 자율주행 자동차, 키노코",
            image : ""
        },
    ]

    return (
        <CareerContainer>
            <Career>
                <TitleComponent title = { careerTitle } />
                <CareerItemsContainer>
                    { career.map((value, index) => {
                        return (
                            <CarerrItems 
                                key = { index }
                            >
                                <CarerrItemsImage 
                                    url = { value.image }
                                />
                                <CarerrTextArea>
                                    <CarerrItemsTitle>
                                        { value.name }
                                    </CarerrItemsTitle>
                                    <CarerrItemsDescription>
                                        { value.description }
                                    </CarerrItemsDescription>
                                </CarerrTextArea>
                            </CarerrItems>
                        ) ;
                    }) }
                </CareerItemsContainer>
            </Career>
        </CareerContainer>
    );
}

export default CareerContents ;