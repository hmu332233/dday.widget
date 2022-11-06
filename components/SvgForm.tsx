import React, { useEffect } from 'react';
import { SvgData } from 'types';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

type Props = {
  defaultValues: SvgData;
  onChange: (v: SvgData) => void;
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
      ({ text, date, theme }) =>
        onChange({
          text: text || '',
          date: date || '',
          theme: theme || 'theme1',
        }),
      defaultValues,
    );
    return () => subscription.unsubscribe();
  }, [watch, defaultValues, onChange]);

  return (
    <form
      className="flex flex-col w-full max-w-xs"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Theme</span>
        </label>
        <select
          className="select select-bordered w-full"
          {...register('theme', { required: true })}
        >
          {/* <option disabled selected>Pick your favorite Simpson</option> */}
          <option value="theme1">theme1</option>
          <option value="theme2">theme2</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <input
          type="date"
          className="input input-bordered"
          defaultValue={defaultValues.date}
          {...register('date', { required: true })}
        />
      </div>
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
    </form>
  );
}

export default SvgForm;
