import React, { useContext } from "react";

import { Button } from "neetoui/v2";

import { DashboardContext } from "contexts/dashboard";

const EmptyState = ({ title, subtitle, primaryActionLabel }) => {
  const { setIsNewNotePaneOpen } = useContext(DashboardContext);

  return (
    <div className="flex flex-row items-start justify-start w-full h-full">
      <div className="w-3/5 m-auto">
        <h2 className="mb-4 text-2xl font-medium text-center">{title}</h2>
        <p className="mb-8 text-base font-normal leading-relaxed text-center text-gray-600">
          {subtitle}
        </p>
        <div className="flex flex-row items-center justify-center">
          <Button
            type="primary"
            icon="ri-add-fill"
            onClick={() => setIsNewNotePaneOpen(true)}
            label={primaryActionLabel}
          />
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
