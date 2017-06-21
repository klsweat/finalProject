import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Courses = ({ secretData }) => (
  <Card className="container">
    <CardTitle
      title="Courses"
      subtitle="courses"
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
  </Card>
);

Courses.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Courses;
