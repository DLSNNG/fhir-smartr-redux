import configureStore from './configureStore'
import Smart from './containers/Smart'
import SmartMulti from './containers/SmartMulti'
import SmartDev from './containers/SmartDev'
import SmartData from './containers/SmartData'
import SmartQuery from './containers/SmartQuery'
import SmartDevQuery from './containers/SmartDevQuery'
import DataViewer from './components/DataViewer'
import Resource from './components/Resource'
import ResourceList from './components/ResourceList'
import ResourceMap from './components/ResourceMap'
import ResourcePager from './components/ResourcePager'
import ResourceDataView from './components/ResourceDataView'

export {configureStore}
export {Smart}
export {SmartMulti}
export {SmartDev}
export {SmartData}
export {SmartQuery}
export {SmartDevQuery}
export {Resource}
export {ResourceList}
export {ResourceMap}
export {ResourcePager}
export {DataViewer}
export {ResourceDataView}

export default {
    configureStore: configureStore,
    Smart: Smart,
    SmartMulti: SmartMulti,
    SmartDev: SmartDev,
    SmartData: SmartData,
    SmartQuery: SmartQuery,
    SmartDevQuery: SmartDevQuery,
    DataViewer: DataViewer,
    Resource: Resource,
    ResourceList: ResourceList,
    ResourceMap: ResourceMap,
    ResourcePager: ResourcePager,
    ResourceDataView: ResourceDataView
}