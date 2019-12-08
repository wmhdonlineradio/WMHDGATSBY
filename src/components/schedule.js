import React from "react"
import axios from "axios"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


class Schedule extends React.Component {
  state = {
    loading: false,
    error: false,
  }

  componentDidMount() {
    this.fetchSchedule()
  }

  render() {
    const { days } = this.state
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          {this.state.loading ? (
            <p>Loading...</p>
          ) : days ? (
            <>
              <Tabs>
                <TabList>
                  <Tab>Sunday</Tab>
                  <Tab>Monday</Tab>
                  <Tab>Tuesday</Tab>
                  <Tab>Wednesday</Tab>
                  <Tab>Thursday</Tab>
                  <Tab>Friday</Tab>
                  <Tab>Saturday</Tab>
                </TabList>

                <TabPanel>
                  <div id="scheduleTabs" dangerouslySetInnerHTML={{__html: days["sunday"]}}></div>
                </TabPanel>
                <TabPanel>
                  <div id="scheduleTabs" dangerouslySetInnerHTML={{__html: days["monday"]}}></div>
                </TabPanel>
                <TabPanel>
                  <div id="scheduleTabs" dangerouslySetInnerHTML={{__html: days["tuesday"]}}></div>
                </TabPanel>
                <TabPanel>
                  <div id="scheduleTabs" dangerouslySetInnerHTML={{__html: days["wednesday"]}}></div>
                </TabPanel>
                <TabPanel>
                  <div id="scheduleTabs" dangerouslySetInnerHTML={{__html: days["thursday"]}}></div>
                </TabPanel>
                <TabPanel>
                  <div id="scheduleTabs" dangerouslySetInnerHTML={{__html: days["friday"]}}></div>
                </TabPanel>
                <TabPanel>
                  <div id="scheduleTabs" dangerouslySetInnerHTML={{__html: days["saturday"]}}></div>
                </TabPanel>
              </Tabs>

            </>
          ) : (
            <p>Failed to load schedule</p>
          )}
        </div>
      </div>
    )
  }

  fetchSchedule = () => {
    this.setState({ loading: true })
    axios
      .get(`https://dj.wmhdradio.org/api/week-info/`)
      .then(data => {
        data = data.data;


        var dow = ["monday", "tuesday", "wednesday", "thursday", "friday","saturday", "sunday"];
        var days = { "monday": {}, "tuesday": {}, "wednesday": {}, "thursday": {}, "friday": {},"saturday": {}, "sunday": {} };

        for (var i=0; i<dow.length; i++){
          var html = 
            '<table class="widget now-playing-list">'+
              '<colgroup>'+
                '<col width="150" />'+
                '<col width="350" />'+
                '<col width="240" />'+
              '</colgroup>'+
              '<thead>'+
                '<tr>'+
                  '<td>Time</td>'+
                  '<td>Show Title</td>'+
                  '<td>Details</td>'+
                '</tr>'+
              '</thead>'+
              '<tfoot>'+
                '<tr>'+
                  '<td></td>'+
                '</tr>'+
              '</tfoot>'+
              '<tbody>';
          var daySchedule = data[dow[i]];
          for (var j=0; j<daySchedule.length; j++){
              var url = daySchedule[j].url;
              html +=
                '<tr>'+
                  '<td>'+getTime(daySchedule[j].start_timestamp)+ " - " + getTime(daySchedule[j].end_timestamp)+'</td>'+
                  '<td>'+
                    '<h4>'+daySchedule[j].name+'</h4>'+
                  '</td>'+
                  '<td>'+
                    '<ul>'+
                      '<li>'+(url.length > 0 ? '<a href="'+url+'">Read more...</a>':'')+'</li>'+
                    '</ul>'+
                  '</td>'+
                '</tr>';
          }
          html +=
              '</tbody>'+
            '</table>';
          days[dow[i]] = html;
        }
        this.setState({
          loading: false,
          days
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({ loading: false, error })
      })
  }
}

function getTime(timestamp) {
  let time = timestamp.split(" ")[1].split(":");
  let suffix = 'AM';
  if (parseInt(time[0]) > 12) {
    time[0] = "" + (parseInt(time[0]) - 12);
    suffix = 'PM';
  } else if (time[0] === "12") {
    suffix = 'PM';
  } else if (time[0] === "00") {
    time[0] = "12";
  }
  return time[0] + ":" + time[1] + " " + suffix;
};

export default Schedule
