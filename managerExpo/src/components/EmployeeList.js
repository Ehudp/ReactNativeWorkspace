import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    // this.createDataSource(this.props);
  }

  // componentWillReceiveProps(nextProps) {
  //     this.createDataSource(nextProps);
  // }

  // createDataSource({ employees }) {
  //     const ds = new ListView.DataSource({
  //         rowHasChanged: (r1, r2) => r1 !== r2
  //     });
  //     this.dataSource = ds.cloneWithRows(employees);
  // }

  renderRow(employee) {
    console.log(`ID [${employee.id}]`);
    return <ListItem employee={employee} />;
  }
  render() {
    const { employees } = this.props;
    return (
      <FlatList
        data={employees}
        renderItem={({ item }) => this.renderRow(item)}
        keyExtractor={(item, index) => item.id}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
