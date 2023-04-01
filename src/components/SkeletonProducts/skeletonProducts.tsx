import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const SkeletonProducts: React.FC = () => (
    <div className="w-[28%]">
        <SkeletonTheme>
            <div className="w-[100%] h-[55%]">
                <Skeleton
                    className="w-[90%] h-[95%]"
                    containerClassName="w-[100%] h-[95%] flex justify-center"
                />
            </div>
            <p>
                <Skeleton count={3} />
            </p>
        </SkeletonTheme>
    </div>
);
