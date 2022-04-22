import React from 'react'

import {
  CAvatar,
  // CButton,
  // CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
//import { CChartLine } from '@coreui/react-chartjs'
// import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  // cibCcAmex,
  // cibCcApplePay,
  // cibCcMastercard,
  // cibCcPaypal,
  // cibCcStripe,
  // cibCcVisa,
  // cibGoogle,
  // cibFacebook,
  // cibLinkedin,
  // cifBr,
  // cifEs,
  // cifFr,
  // cifIn,
  // cifPl,
  // cifUs,
  // cibTwitter,
  // cilCloudDownload,
  cilPeople,
  // cilUser,
  // cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
// import avatar5 from 'src/assets/images/avatars/5.jpg'
// import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  //const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Web Development', value: '2900', percent: 40, color: 'success' },
    { title: 'Mobile Development', value: '1269', percent: 20, color: 'info' },
    { title: 'Cyber Security', value: '247', percent: 60, color: 'warning' },
    { title: 'React Js', value: '203', percent: 80, color: 'danger' },
    { title: 'Data Analyst', value: '51', percent: 40.15, color: 'primary' },
  ]

  // const progressGroupExample1 = [
  //   { title: 'Monday', value1: 34, value2: 78 },
  //   { title: 'Tuesday', value1: 56, value2: 94 },
  //   { title: 'Wednesday', value1: 12, value2: 67 },
  //   { title: 'Thursday', value1: 43, value2: 91 },
  //   { title: 'Friday', value1: 22, value2: 73 },
  //   { title: 'Saturday', value1: 53, value2: 82 },
  //   { title: 'Sunday', value1: 9, value2: 69 },
  // ]

  // const progressGroupExample2 = [
  //   { title: 'Male', icon: cilUser, value: 53 },
  //   { title: 'Female', icon: cilUserFemale, value: 43 },
  // ]

  // const progressGroupExample3 = [
  //   { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
  //   { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
  //   { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
  //   { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  // ]
  //table  for internships and hackthon
  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      Company: {
        name: 'Facebook',
        // new: true,
        // registered: 'Jan 1, 2021',
      },
      Title: { title: 'Modile Development' /*flag: cifUs*/ },
      mode: {
        value: 'offline',
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      stipend: { amount: '1000' /*icon: cibCcMastercard */ },
      availability: 'available',
    },
    {
      avatar: { src: avatar2, status: 'success' },
      Company: {
        name: 'Amazon',
        // new: true,
        // registered: 'Jan 1, 2021',
      },
      Title: { title: 'Modile Development' /*flag: cifUs*/ },
      mode: {
        value: 'offline',
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      stipend: { amount: '1000' /*icon: cibCcMastercard */ },
      availability: 'available',
    },
    {
      avatar: { src: avatar3, status: 'success' },
      Company: {
        name: 'Google',
        // new: true,
        // registered: 'Jan 1, 2021',
      },
      Title: { title: 'Modile Development' /*flag: cifUs*/ },
      mode: {
        value: 'offline',
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      stipend: { amount: '1000' /*icon: cibCcMastercard */ },
      availability: 'available',
    },
    {
      avatar: { src: avatar4, status: 'success' },
      Company: {
        name: 'L&T',
        // new: true,
        // registered: 'Jan 1, 2021',
      },
      Title: { title: 'Modile Development' /*flag: cifUs*/ },
      mode: {
        value: 'offline',
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      stipend: { amount: '1000' /*icon: cibCcMastercard */ },
      availability: 'available',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      <WidgetsBrand />

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Internships {' & '} Hackathons</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Company</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Title</CTableHeaderCell>
                    <CTableHeaderCell>Mode</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Duration</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Stipend</CTableHeaderCell>
                    <CTableHeaderCell>Availability</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.Company.name}</div>
                        {/* <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div> */}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <span className="internship-hackthon-title">{item.Title.title}</span>
                        {/* <CIcon size="xl" icon={item.country.flag} title={item.country.name} /> */}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.mode.value}</strong>
                          </div>
                          {/* <div className="float-end">
                            <small className="text-medium-emphasis">{item.mode.period}</small>
                          </div> */}
                        </div>
                        {/* <CProgress thin color={item.mode.color} value={item.mode.value} /> */}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className="float-start">
                          <strong>{item.mode.period}</strong>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <span>{item.stipend.amount}</span>
                        {/* <CIcon size="xl" icon={item.stipend.amount} /> */}
                      </CTableDataCell>
                      <CTableDataCell>
                        {/* <div className="small text-medium-emphasis">Last login</div> */}
                        <strong>{item.availability}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
