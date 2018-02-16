import configureStore from './configureStore'
import Smart from './containers/Smart'
import SmartDev from './containers/SmartDev'
import SmartData from './containers/SmartData'
import SmartQuery from './containers/SmartQuery'
import SmartDevQuery from './containers/SmartDevQuery'
import DataViewer from './components/DataViewer'
import Resource from './components/Resource'
import ResourceList from './components/ResourceList'
import ResourcePager from './components/ResourcePager'
import ResourceDataView from './components/ResourceDataView'

export {configureStore}
export {Smart}
export {SmartDev}
export {SmartData}
export {SmartQuery}
export {SmartDevQuery}
export {Resource}
export {ResourceList}
export {ResourcePager}
export {DataViewer}
export {ResourceDataView}

export default {
    configureStore: configureStore,
    Smart: Smart,
    SmartDev: SmartDev,
    SmartData: SmartData,
    SmartQuery: SmartQuery,
    SmartDevQuery: SmartDevQuery,
    DataViewer: DataViewer,
    Resource: Resource,
    ResourceList: ResourceList,
    ResourcePager: ResourcePager,
    ResourceDataView: ResourceDataView
}