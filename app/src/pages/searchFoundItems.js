import "./styles.css";
import "./foundItems.css";
import { DropdownBtn, Cards } from "../Components/foundItemComponents";
import 'bootstrap/dist/css/bootstrap.css'
import '../Components/dropdown.css'

const SearchFoundItems = () => {
  //Array of items for the building button
  const items = [{ 'name': 'Action1', 'action': '/nothing' }]
  //Array of items that populates lost items
  const lostItems = [
    {
      'title': 'iPhone 13 Pro Max',
      'desc': 'Has blue case',
      'claimDesc': 'Please claim item at the front desk of SH.',
      'building': 'SH 112',
      'dateFound': '11/8/2022 1:23 PM',
      'img': 'https://cdn.vox-cdn.com/thumbor/v2ArlLLvy_xZ-Xwz26Y1rLZzCLQ=/0x0:2002x1335/1400x1400/filters:focal(1001x668:1002x669)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863273/vpavic_210916_4760_0240.jpg'
    },
    {
      'title': 'Wallet',
      'desc': 'Green wallet',
      'claimDesc': 'Please claim item at the front desk of Breland Hall.',
      'building': 'BH 100',
      'dateFound': '11/7/2022 12:18 PM',
      'img': 'https://hips.hearstapps.com/hmg-prod/images/allett-hybrid-wallet-1655405689.jpg'
    },
    {
      'title': 'Jacket',
      'desc': 'Orange Jacket, looks like it is for winter.',
      'claimDesc': 'Please claim this item with the front desk in Corbett Center.',
      'building': 'CCSU',
      'dateFound': '11/1/2022 5:57 PM',
      'img': 'https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw1a27a29d/images/hi-res/26540_TGOR.jpg?sw=350&sh=350&sfrm=png&q=95&bgcolor=f5f5f5'
    },
    {
      'title': 'Keys',
      'desc': 'Pair of 4 house keys.',
      'claimDesc': 'Please see room 200 in the Educational Services Center',
      'building': 'Pan Am Center',
      'dateFound': '10/22/2022 9:02 PM',
      'img': 'https://www.scarce.org/wp-content/uploads/2016/11/keys.jpg'
    },
  ]

  //https://stackoverflow.com/questions/62880615/how-do-i-map-for-every-two-elements-for-react
  //Divides array by 4 for later use in using the row
  const lostItemList = lostItems.reduce(function (rows, key, index) {
    return (index % 4 === 0 ? rows.push([key])
      : rows[rows.length - 1].push(key)) && rows;
  }, []);
  return (
    <div className='container'>
      <h3 className='heading'>Search Found Items</h3>
      <br></br>
      <div className='row'>
        <div className='divider'><DropdownBtn title="Building" items={items} /></div>
        <div className='divider'><DropdownBtn title="Item-Type" items={items} /></div>
        <div className='divider'>Search bar TODO</div>
      </div>
      {
        lostItemList.map(LostItem => (
          <div className='row'>
            {LostItem.map(item => (
              <div className="cardDivider"><Cards building={item.building} dateFound={item.dateFound} title={item.title} claimDesc={item.claimDesc} desc={item.desc} img={item.img} /></div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default SearchFoundItems;
