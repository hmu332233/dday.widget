import React, { useEffect } from 'react';
import { SvgData, FormItem, Theme, THEMES } from 'types';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

type Props = {
  defaultValues: SvgData;
  onChange: (v: SvgData) => void;
};

const formItemsMap: { [key in Theme]: FormItem[] } = {
  theme1: ['theme', 'date', 'text'],
  theme2: ['theme', 'startDate', 'date', 'text'],
  theme3: ['theme', 'date', 'text'],
};

function SvgForm({ defaultValues, onChange }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SvgData>();
  const onSubmit: SubmitHandler<SvgData> = (data) => console.log(data);

  useEffect(() => {
    const subscription = watch(
      ({ text, date, startDate, theme }) =>
        onChange({
          text: text!,
          date: date!,
          startDate: startDate!,
          theme: theme || 'theme1',
        }),
      defaultValues,
    );
    return () => subscription.unsubscribe();
  }, [watch, defaultValues, onChange]);

  const theme = watch('theme', defaultValues.theme)!;

  const formMap = {
    theme: (
      <div className="form-control">
        <label className="label">
          <span className="label-text">Theme</span>
        </label>
        <select
          className="select select-bordered w-full"
          defaultValue={defaultValues.theme}
          {...register('theme', { required: true })}
        >
          {/* <option disabled selected>Pick your favorite Simpson</option> */}
          {THEMES.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>
    ),
    startDate: (
      <div className="form-control">
        <label className="label">
          <span className="label-text">Start Date</span>
        </label>
        <input
          type="date"
          className="input input-bordered"
          defaultValue={defaultValues.startDate}
          {...register('startDate', { required: true })}
        />
      </div>
    ),
    date: (
      <div className="form-control">
        <label className="label">
          <span className="label-text">End Date</span>
        </label>
        <input
          type="date"
          className="input input-bordered"
          defaultValue={defaultValues.date}
          {...register('date', { required: true })}
        />
      </div>
    ),
    text: (
      <div className="form-control">
        <label className="label">
          <span className="label-text">Text</span>
        </label>
        <input
          type="text"
          className="input input-bordered"
          defaultValue={defaultValues.text}
          {...register('text', { required: true })}
        />
      </div>
    ),
  };

  return (
    <form
      className="flex flex-col w-full max-w-xs"
      onSubmit={handleSubmit(onSubmit)}
    >
      {formItemsMap[theme].map((itemKey) => formMap[itemKey])}
    </form>
  );
}

export default SvgForm;
