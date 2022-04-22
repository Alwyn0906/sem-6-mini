import React from 'react'
// import CIcon from '@coreui/icons-react'
import { CContainer, CImage } from '@coreui/react'
import { CCard, CCardBody, CButton, /* CCardHeader,*/ CCol, CRow } from '@coreui/react'
// import avatar1 from 'src/assets/images/avatars/1.jpg'

const Internship = () => {
  return (
    <CContainer>
      {/*for loop or map*/}
      <CCard className="mb-3">
        <CCardBody>
          <CRow>
            <CCol sm={6} lg={3}>
              <CRow>
                <CCol>
                  <strong>{'Google'}</strong>
                </CCol>
              </CRow>
              <CRow>
                <CCol className="mt-4">
                  <CImage rounded src="src/assets/images/avatars/1.jpg" width={100} height={100} />
                </CCol>
              </CRow>
            </CCol>

            <CCol sm={6} lg={5}>
              <CRow>
                <CCol className="text-center">
                  <strong>{/*internship title*/ 'Mobile Development'}</strong>
                </CCol>
              </CRow>
              <CRow className="text-center">
                <CCol className="mt-3">
                  <div>
                    <strong>Stipend</strong>
                  </div>
                  <div>$2000</div>
                </CCol>
                <CCol className="mt-3">
                  <div>
                    <strong>Duration</strong>
                  </div>
                  <div>12 months</div>
                </CCol>
                <CCol className="mt-3">
                  <div>
                    <strong>Mode</strong>
                  </div>
                  <div>WFH</div>
                </CCol>
              </CRow>
            </CCol>
            <CCol sm={6} lg={3}>
              <CRow>
                <CCol>
                  <div className="text-center">
                    <strong>Description</strong>
                  </div>
                  <p style={{ fontSize: '13px' }}>
                    Techolution is a global business technology consultancy headquartered in New
                    York City with offices in India, Singapore, Indonesia, and Mauritius. We
                    specialize in building and implementing managed services and solutions for
                    customers who want to digitally transform their business,
                  </p>
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <CButton type="submit" color="primary">
                    Apply Now
                  </CButton>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm={6} lg={3}>
              <CRow>
                <CCol>
                  <strong>{'Google'}</strong>
                </CCol>
              </CRow>
              <CRow>
                <CCol className="mt-4">
                  <CImage rounded src="src/assets/images/avatars/1.jpg" width={100} height={100} />
                </CCol>
              </CRow>
            </CCol>

            <CCol sm={6} lg={5}>
              <CRow>
                <CCol className="text-center">
                  <strong>{/*internship title*/ 'Mobile Development'}</strong>
                </CCol>
              </CRow>
              <CRow className="text-center">
                <CCol className="mt-3">
                  <div>
                    <strong>Stipend</strong>
                  </div>
                  <div>$2000</div>
                </CCol>
                <CCol className="mt-3">
                  <div>
                    <strong>Duration</strong>
                  </div>
                  <div>12 months</div>
                </CCol>
                <CCol className="mt-3">
                  <div>
                    <strong>Mode</strong>
                  </div>
                  <div>WFH</div>
                </CCol>
              </CRow>
            </CCol>
            <CCol sm={6} lg={3}>
              <CRow>
                <CCol>
                  <div className="text-center">
                    <strong>Description</strong>
                  </div>
                  <p style={{ fontSize: '13px' }}>
                    Techolution is a global business technology consultancy headquartered in New
                    York City with offices in India, Singapore, Indonesia, and Mauritius. We
                    specialize in building and implementing managed services and solutions for
                    customers who want to digitally transform their business,
                  </p>
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <CButton type="submit" color="primary">
                    Apply Now
                  </CButton>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}
export default Internship
