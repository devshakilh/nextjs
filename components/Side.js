

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';
import { Sidelinks } from './fake_data';


const Side = () => {
    const [open, setOpen] = useState()
    const [dropDownIndex, setDropDownIndex] = useState(  undefined
    );
    const [secondDropDownIndex, setSecondDropDownIndex] = useState(
        undefined
    );
    const [thirdDropDownIndex, setthirdDropDownIndex] = useState(
        undefined
    );
    const router = useRouter();
    useEffect(() => {
        setOpen(false);
    }, [router.pathname, setOpen]);
    return (
        <div className="relative text-black md:text-black mt-4">
            <div className=" h-screen">
                <ul>
                    {Sidelinks?.map((l, i) => {
                        return (
                            <React.Fragment key={i}>
                                <li
                                    onClick={() => {
                                        if (l.sublinks?.length) {
                                            if (dropDownIndex === i) {
                                                setDropDownIndex(undefined);
                                            } else {
                                                setDropDownIndex(i);
                                            }
                                        } else {
                                            router.push(l.link);
                                        }
                                    }}
                                    className={`flex items-center uppercase cursor-pointer justify-between pr-5 py-[12px]`}
                                >
                                    <h4
                                        style={{
                                            fontWeight: "bold",
                                            transition: "all .3s ease-in-out",
                                            color: ``,
                                        }}
                                        className={` text-[14px] ${dropDownIndex === i ? "text-[#3B7DED]" : "text-black md:text-black"}`}
                                    >
                                        {l.name}
                                    </h4>
                                    {l.sublinks?.length && (
                                        <IoIosArrowDown
                                            className={`duration-300 ${dropDownIndex === i
                                                ? "rotate-180 text-[#3B7DED]"
                                                : "rotate-0"
                                                }`}
                                            fontSize={25}
                                        />
                                    )}
                                </li>
                                {l.sublinks?.length && (
                                    <ul
                                        style={{
                                            display: dropDownIndex === i ? "block" : "none",
                                            paddingLeft: "10px",
                                        }}
                                    >
                                        {l.sublinks.map((sublink, i) => (
                                            <>
                                                <li
                                                    className={`flex items-center uppercase cursor-pointer justify-between py-[12px] w-10/12 mx-left`}
                                                    style={{ padding: "8px 0px", color: "#fff" }}

                                                    onClick={() => {
                                                        if (sublink?.extralink?.length) {
                                                            if (secondDropDownIndex === i) {
                                                                setSecondDropDownIndex(undefined);
                                                            } else {
                                                                setSecondDropDownIndex(i);
                                                            }
                                                        } else {
                                                            router.push(sublink.link);
                                                        }
                                                    }}
                                                >
                                                    {/* <Link href={sublink.link}>{sublink.name}</Link> */}
                                                    <Link href={sublink.link}
                                                        style={{
                                                            fontWeight: "bold",
                                                            transition: "all .3s ease-in-out",
                                                            color: ``,
                                                        }}
                                                        className={`text-[14px] ${secondDropDownIndex === i ? "text-[#3B7DED]" : "text-black md:text-black"}`}
                                                    >
                                                        {sublink.name}
                                                    </Link>
                                                    {sublink?.extralink?.length && (
                                                        <IoIosArrowDown
                                                            className={`duration-300 ${secondDropDownIndex === i
                                                                ? "rotate-180 text-[#3B7DED]"
                                                                : "rotate-0 text-black md:text-black"
                                                                }`}
                                                            fontSize={25}
                                                        />
                                                    )}
                                                </li>
                                                {
                                                    sublink?.extralink?.length && (
                                                        <ul
                                                            style={{
                                                                display: secondDropDownIndex === i ? "block" : "none",
                                                                paddingLeft: "10px",
                                                            }}
                                                        >
                                                            {sublink.extralink?.map((item, j) =>
                                                                <li
                                                                    key={item.id}
                                                                    onClick={() => {
                                                                        if (sublink?.extralink?.length) {
                                                                            if (thirdDropDownIndex === j) {
                                                                                setthirdDropDownIndex(undefined);
                                                                            } else {
                                                                                setthirdDropDownIndex(j);
                                                                            }
                                                                        } else {
                                                                            router.push(item.link);
                                                                        }
                                                                    }}
                                                                >
                                                                    <Link href={item.link} style={{
                                                                        fontWeight: "bold",
                                                                        transition: "all .3s ease-in-out",
                                                                        color: ``,
                                                                    }}
                                                                        className={` text-[14px] hover:text-[#3B7DED] ${thirdDropDownIndex === j ? "text-[#000]" : "text-[#000] md:text-black"}`}>{item.name}</Link>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    )
                                                }
                                            </>
                                        ))}
                                    </ul>
                                )}
                            </React.Fragment>
                        );
                    })}
                </ul>
            </div>

            <IoCloseOutline
                onClick={() => setOpen(false)}
                style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "40px",
                    position: "absolute",
                    top: "15px",
                    right: "-55px",
                }}
            />
        </div>
    );
};

export default Side;