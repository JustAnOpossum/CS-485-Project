import "./styles.css";
import "./foundItems.css";
import { DropdownBtn, Cards } from "../Components/foundItemComponents";
import 'bootstrap/dist/css/bootstrap.css'
import '../Components/dropdown.css'
import { useReducer } from 'react';
import TextField from "@mui/material/TextField";


//Array of items for the building button
const buildingBtnItems = ['All', 'SH', 'BH', 'CCSU', 'Pan Am']
//Array of items for the item type button
const itemTypeBtnItems = ['All', 'Phone', 'Wallet', 'Keys', 'Other']

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
  //Creates the state for each of the mock lists
  const [foundItemsList, updateFoundItemsList] = useReducer(reducer, foundItems)
  const [lostItemsList, updateLostItemsList] = useReducer(reducer, lostItems)
  const [claimedItemsList, updateClaimedItemsList] = useReducer(reducer, claimedItems)

  function reducer(state, action) {
    //Resets the state if all items are selected
    if (action.item === 'All') {
      return action.initItems
    }
    switch (action.type) {
      //Case for building button
      case 'building':
        return action.initItems.filter(item => {
          return item.building.includes(action.item)
        })
      //Case for item selection button
      case 'item':
        return action.initItems.filter(item => {
          return item.itemType.includes(action.item)
        })
      //Case for search bar update
      case 'search':
        return action.initItems.filter(item => {
          return item.title.toLowerCase().includes(action.item) || item.desc.toLowerCase().includes(action.item) || item.building.toLowerCase().includes(action.item)
        })
      default:
    }
  }

  //Caller for the building button
  function buildingBtn(item) {
    updateFoundItemsList({ type: 'building', item: item, initItems: foundItems })
    updateLostItemsList({ type: 'building', item: item, initItems: lostItems })
    updateClaimedItemsList({ type: 'building', item: item, initItems: claimedItems })
  }
  //Caller for the item button
  function itemBtn(item) {
    updateFoundItemsList({ type: 'item', item: item, initItems: foundItems })
    updateLostItemsList({ type: 'item', item: item, initItems: lostItems })
    updateClaimedItemsList({ type: 'item', item: item, initItems: claimedItems })
  }
  //Caller for when user types text into the text box
  function txtUpdate(txt) {
    updateFoundItemsList({ type: 'search', item: txt.target.value.toLowerCase(), initItems: foundItems })
    updateLostItemsList({ type: 'search', item: txt.target.value.toLowerCase(), initItems: lostItems })
    updateClaimedItemsList({ type: 'search', item: txt.target.value.toLowerCase(), initItems: claimedItems })
  }

  return (
    <div className='container'>
      <h3 className='heading'>Search Found Items</h3>
      <br></br>
      <div className='row'>
        <div className='divider'><DropdownBtn eventHandle={buildingBtn} title="Building" items={buildingBtnItems} /></div>
        <div className='divider'><DropdownBtn eventHandle={itemBtn} title="Item Type" items={itemTypeBtnItems} /></div>
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
    </div>
  );
}

export default SearchFoundItems;
