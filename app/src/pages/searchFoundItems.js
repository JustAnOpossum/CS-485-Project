import "./styles.css";
import "./foundItems.css";
import { DropdownBtn, Cards } from "../Components/foundItemComponents";
import 'bootstrap/dist/css/bootstrap.css'
import '../Components/dropdown.css'
import { useReducer, useState } from 'react';
import TextField from "@mui/material/TextField";


//Array of items for the building button
const orgBuildingBtnItems = ['All', 'SH', 'BH', 'CCSU', 'Pan Am']
//Array of items for the item type button
const orgItemTypeBtnItems = ['All', 'Phone', 'Wallet', 'Keys', 'Other']

//Array of items that populates found items
const foundItems = [
  {
    'title': 'iPhone 13 Pro Max',
    'itemType': 'Phone',
    'desc': 'Has blue case',
    'claimDesc': 'Please claim item at the front desk of SH.',
    'building': 'SH 112',
    'dateFound': '11/8/2022 1:23 PM',
    'img': 'https://cdn.vox-cdn.com/thumbor/v2ArlLLvy_xZ-Xwz26Y1rLZzCLQ=/0x0:2002x1335/1400x1400/filters:focal(1001x668:1002x669)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863273/vpavic_210916_4760_0240.jpg'
  },
  {
    'title': 'Wallet',
    'desc': 'Green wallet',
    'itemType': 'Wallet',
    'claimDesc': 'Please claim item at the front desk of Breland Hall.',
    'building': 'BH 100',
    'dateFound': '11/7/2022 12:18 PM',
    'img': 'https://hips.hearstapps.com/hmg-prod/images/allett-hybrid-wallet-1655405689.jpg'
  },
  {
    'title': 'Jacket',
    'desc': 'Orange Jacket, looks like it is for winter.',
    'itemType': 'Other',
    'claimDesc': 'Please claim this item with the front desk in Corbett Center.',
    'building': 'CCSU',
    'dateFound': '11/1/2022 5:57 PM',
    'img': 'https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw1a27a29d/images/hi-res/26540_TGOR.jpg?sw=350&sh=350&sfrm=png&q=95&bgcolor=f5f5f5'
  },
  {
    'title': 'Keys',
    'desc': 'Pair of 4 house keys.',
    'itemType': 'Keys',
    'claimDesc': 'Please see room 200 in the Educational Services Center',
    'building': 'Pan Am Center',
    'dateFound': '10/22/2022 9:02 PM',
    'img': 'https://www.scarce.org/wp-content/uploads/2016/11/keys.jpg'
  },
]
//Array of items that populates lost items
const lostItems = [
  {
    'title': 'Samsung Galaxy S22',
    'desc': 'Black otterbox case',
    'itemType': 'Phone',
    'claimDesc': 'If you find this item please turn it into Science hall',
    'building': 'SH',
    'dateFound': '11/5/2022 10:56 PM',
    'img': 'https://helios-i.mashable.com/imagery/reviews/074lTlwrLLcH7SVYrBFC2mU/hero-image.fill.size_1200x1200.v1645211431.jpg'
  },
  {
    'title': 'Macbook Pro',
    'desc': 'Has green stickers on the front',
    'itemType': 'Other',
    'claimDesc': 'If you find this item please turn it into Breland Hall.',
    'building': 'BH',
    'dateFound': '11/1/2022 12:18 PM',
    'img': 'https://www.cnet.com/a/img/resize/7dc0ce072e83064e3ecd1e13586dea707f272187/hub/2017/06/27/13484418-bfd9-41e2-8f2d-9b4afb072da8/apple-macbook-pro-15-inch-2017-14.jpg?auto=webp&width=768'
  }
]
//Array of items that populates claimed items
const claimedItems = [
  {
    'title': 'Logitech Wireless Mouse',
    'desc': 'Black wireless mouse',
    'itemType': 'Other',
    'claimDesc': 'If you want to dispute this claim, please see front desk staff in science hall',
    'building': 'SH',
    'dateFound': '11/9/2022 10:56 PM',
    'img': 'https://resource.logitech.com/content/dam/logitech/en/products/mice/m185/gallery/m185-gallery-1-grey-emea.png'
  }
]


const SearchFoundItems = () => {
  //Array of items for the building button
  let buildingBtnObj = { items: [...orgBuildingBtnItems], filter: '' }
  buildingBtnObj.items[0] = '✔️ ' + buildingBtnObj.items[0]
  //Array of items for the item type button
  let itemTypeBtnObj = { items: [...orgItemTypeBtnItems], filter: '' }
  itemTypeBtnObj.items[0] = '✔️ ' + itemTypeBtnObj.items[0]

  //State for the serach bar
  const [searchBar, setSearchBar] = useState('')

  //State for the buttons
  const [buildingBtnState, updateBuildingBtn] = useReducer(btnReducer, buildingBtnObj)
  const [itemBtnState, updateItemBtn] = useReducer(btnReducer, itemTypeBtnObj)

  //Creates the state for each of the mock lists
  const [foundItemsList, updateFoundItemsList] = useReducer(reducer, foundItems)
  const [lostItemsList, updateLostItemsList] = useReducer(reducer, lostItems)
  const [claimedItemsList, updateClaimedItemsList] = useReducer(reducer, claimedItems)


  //Reducer method to update the buttons
  function btnReducer(state, action) {
    let filter = (action.item === 'All') ? '' : action.item
    let newBtns = action.orgItems
    let selectionIndex = newBtns.indexOf(action.item)
    newBtns[selectionIndex] = '✔️ ' + newBtns[selectionIndex]
    return { items: newBtns, filter: filter }
  }

  //Reducer method to update the cards
  function reducer(state, action) {
    return action.initItems.filter(item => {
      return (item.title.toLowerCase().includes(searchBar) || item.desc.toLowerCase().includes(searchBar) || item.building.toLowerCase().includes(searchBar)) && (item.itemType.includes(itemBtnState.filter) && item.building.includes(buildingBtnState.filter))
    })
  }

  //Caller for the building button
  function buildingBtn(item) {
    item = item.replace('✔️ ', '')
    updateBuildingBtn({ item: item, orgItems: [...orgBuildingBtnItems] })
    updateCards(item)
  }
  //Caller for the item button
  function itemBtn(item) {
    item = item.replace('✔️ ', '')
    updateItemBtn({ item: item, orgItems: [...orgItemTypeBtnItems] })
    updateCards(item)
  }
  //Caller for when user types text into the text box
  function txtUpdate(txt) {
    setSearchBar(txt.target.value.toLowerCase())
    updateCards(txt.target.value.toLowerCase())
  }

  //Updates the cards for all methods
  function updateCards(item) {
    updateFoundItemsList({ item: item, initItems: foundItems })
    updateLostItemsList({ item: item, initItems: lostItems })
    updateClaimedItemsList({ item: item, initItems: claimedItems })
  }


  return (
    <div className='container'>
      <h3 className='heading'>Search Found Items</h3>
      <br></br>
      <div className='row'>
        <div className='divider'><DropdownBtn eventHandle={buildingBtn} title={'Building (' + buildingBtnState.items.find(item => item.search('✔️') !== -1).replace('✔️ ', '') + ')'} items={buildingBtnState.items} /></div>
        <div className='divider'><DropdownBtn eventHandle={itemBtn} title={'Items (' + itemBtnState.items.find(item => item.search('✔️') !== -1).replace('✔️ ', '') + ')'} items={itemBtnState.items} /></div>
        <div className='divider'>
          <TextField label="Search items" onChange={txtUpdate} />
        </div>
        <h2 className='heading'>Found Items</h2>
      </div>
      <div className='row'>
        {foundItemsList.map(item => (
          <div className="cardDivider"><Cards dateDesc="Date Found" buttonText="Claim this item" building={item.building} dateFound={item.dateFound} title={item.title} claimDesc={item.claimDesc} desc={item.desc} img={item.img} /></div>
        ))}
      </div>
      <h2 className='heading'>Lost Items</h2>
      <div className='row'>
        {lostItemsList.map(item => (
          <div className="cardDivider"><Cards dateDesc="Date Lost" buttonText="I found this item" building={item.building} dateFound={item.dateFound} title={item.title} claimDesc={item.claimDesc} desc={item.desc} img={item.img} /></div>
        ))}
      </div>
      <h2 className='heading'>Claimed Items</h2>
      <div className='row'>
        {claimedItemsList.map(item => (
          <div className="cardDivider"><Cards dateDesc="Date Claimed" buttonText="I want to disupte this claim" building={item.building} dateFound={item.dateFound} title={item.title} claimDesc={item.claimDesc} desc={item.desc} img={item.img} /></div>
        ))}
      </div>
    </div >
  );
}

export default SearchFoundItems;
