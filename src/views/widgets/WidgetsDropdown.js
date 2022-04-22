import React from 'react'
import { Link } from 'react-router-dom'
import { CRow, CCol, CWidgetStatsA } from '@coreui/react'

const WidgetsDropdown = () => {
  return (
    <CRow class="row justify-content-around">
      <CCol sm={6} lg={3}>
        <Link to="/internship" style={{ textDecoration: 'none' }}>
          <CWidgetStatsA
            className="mb-4"
            color="warning"
            value={<>{'Internships'}</>}
            title="4562"
          />
        </Link>
      </CCol>
      <CCol sm={6} lg={3}>
        <Link to="/internship" style={{ textDecoration: 'none' }}>
          <CWidgetStatsA
            className="mb-4"
            color="primary"
            value={<>{'Hackathons'}</>}
            title="4562"
          />
        </Link>
      </CCol>
      <CCol sm={6} lg={3}>
        <Link to="/internship" style={{ textDecoration: 'none' }}>
          <CWidgetStatsA
            className="mb-4"
            color="success"
            value={<>{'Preferences'}</>}
            title="4562"
          />
        </Link>
      </CCol>
      {/* <CCol sm={6} lg={3}>
        <Link to="/internship" style={{ textDecoration: 'none' }}>
          <CWidgetStatsA className="mb-4" color="info" value={<>{'Resume'}</>} title="4562" />
        </Link>
      </CCol> */}
      {/* <CCol sm={6} lg={3}>
        <Link to="/internship" style={{ textDecoration: 'none' }}>
          <CWidgetStatsA
            className="mb-4"
            color="danger"
            value={<>{'Edit Profile'}</>}
            title="4562"
          />
        </Link>
      </CCol> */}
      <CCol sm={6} lg={3}>
        <Link to="/internship" style={{ textDecoration: 'none' }}>
          <CWidgetStatsA
            className="mb-4"
            color="dark"
            value={<>{'Recommendation'}</>}
            title="4562"
          />
        </Link>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
