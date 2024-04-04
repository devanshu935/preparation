// import React from 'react';
// import { useState } from 'react';
// function App() {
//   const [checkBoxItems, setCheckBoxItems] = useState({});

//   const config = [
//     {
//       label: 'Section A',
//       id: 1,
//       children: [
//         {
//           label: 'Student 1',
//           id: 2,
//         },
//         {
//           label: 'Student 2',
//           id: 3,
//         },
//         {
//           label: 'Student 3',
//           id: 4,
//         },
//       ],
//     },
//     {
//       label: 'Section B',
//       id: 5,
//       children: [
//         {
//           label: 'Student 1',
//           id: 6,
//         },
//         {
//           label: 'Student 2',
//           id: 7,
//         },
//         {
//           label: 'Student 3',
//           id: 8,
//         },
//       ]
//     }
//   ];

//   const handleCheckboxToggle = (e, id) => {
//     setCheckBoxItems(
//       ...checkBoxItems,
//       checkBoxItems[id] === true? false : true
//     );
//   }

//   const ChildBox = ({ child, isParentChecked }) => {
//     return (
//       <>
//         <input type="checkbox" checked={isParentChecked} />
//         <label>{child.label}</label>
//         <br />
//         {child.children &&
//           child.children.map((subItem) => (
//             <ChildBox key={subItem.id} child={subItem} checked={isParentChecked}/> // Recursive call
//           ))}
//       </>
//     );
//   };

//   return (
//     <div
//       className="App"
//       style={{ padding: '20px', backgroundColor: '#f5f5f5' }}
//     >
//       {config.map((item) => (
//         <div key={item.id} style={{ marginBottom: '10px' }}>
//           <input type="checkbox" onChange={(e) => handleCheckboxToggle(e, item.id)}/>
//           <label>{item.label}</label>

//           <div style={{ marginLeft: '20px' }}>
//             {item.children &&
//               item.children.map((subItem) => (
//                 <ChildBox key={subItem.id} child={subItem} />
//               ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
//
// export default App;

import React, { useState } from 'react';

function App() {
  const config = [
    {
      label: 'Parent1',
      id: 1,
      children: [
        {
          label: 'Child p1.c1',
          id: 2,
        },
        {
          label: 'Child p1.c2',
          id: 3,
        },
        {
          label: 'Childp1.c3',
          id: 4,
        },
      ],
    },
    {
      label: 'Parent2',
      id: 5,
      children: [
        {
          label: 'Childp2.c1',
          id: 4,
        },
      ],
    },
  ];

  const [checkBoxItems, setCheckBoxItems] = useState({});

  const handleClick = (parentId) => {
    setCheckBoxItems({
      ...checkBoxItems,
      [parentId]: !checkBoxItems[parentId]
    })
  }

  const handleToggle = (childId) => {
    setCheckBoxItems(
      ...checkBoxItems,
      
    )
  }

  const ChildBox = ({ child, isParentChecked, parentId }) => {
    return (
      <>
        <input type="checkbox" checked={isParentChecked} onChange={() => handleToggle()} />
        <label>{child.label}</label>
        <br />
        {child.children &&
          child.children.map((subItem) => (
            <ChildBox key={subItem.id} child={subItem} checked={checkBoxItems[child.id]} /> // Recursive call
          ))}
      </>
    );
  };


  return (
    <div
      className="App"
      style={{ padding: '20px', backgroundColor: '#f5f5f5' }}
    >
      {config.map((item) => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          <input
            type="checkbox"
            checked={checkBoxItems[item.id]}
            onChange={() => handleClick(item.id)}
          />
          <label>{item.label}</label>

          <div style={{ marginLeft: '20px' }}>
            {item.children &&
              item.children.map((subItem) => (
                <ChildBox
                  key={subItem.id}
                  child={subItem}
                  isParentChecked={checkBoxItems[item.id]}
                  parentId = {item.id}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;