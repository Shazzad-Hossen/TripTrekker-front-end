import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
import { CiFilter } from "react-icons/ci";
import sortIco from '../../assets/icon/sort.png'





const Packages = () => {
    return (
        <div className="pt-20 px-5 container">
           

            <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            <div className="flex items-center justify-end py-10  sm:col-span-2 lg:col-span-3 xl:col-span-4 gap-2">
                <div className="border rounded bg-white h-[30px] w-[80px] justify-center text-md  font-chakra bg-opacity-50 flex items-center gap-2 cursor-pointer"> <CiFilter/>Filter</div>
                <div className="border rounded bg-white h-[30px] w-[40px] flex justify-center items-center text-md  font-chakra bg-opacity-50  cursor-pointer"> <img className='w-[15px]' src={sortIco} alt="" /> </div>
              
            </div>
                {
                    
                    [1,2,3,4,5,6,7,8,9].map((data,index)=><div key={index} className='border rounded-lg shadow-lg cursor-pointer'><Card
                    style={{
                      maxWidth: '400px',
                      border: 0,
                      
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <SettingOutlined key="setting" />,
                      <EditOutlined key="edit" />,
                      <EllipsisOutlined key="ellipsis" />,
                    ]}
                  >
                    <Meta
                      
                      title="Saint MArtin Tour"
                      description="This is the description"
                    />
                  </Card></div>)
                }
            </div>
            </div>
        </div>
    );
};

export default Packages;