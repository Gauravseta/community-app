/**
 * This component should render the entire page assembly,
 * but not yet implement the logic behind user actions.
 * It still receives submissions and challenge data, all callbacks, etc. from its parent container
 *
 * Namely, it receives via props: the mock data object (provided along with this specs),
 * the showDetails set, and config object holding all necessary callbacks:
 * onBack() - to trigger when user clicks Back button under the challenge name;
 * onDelete(submissionId);
 * onDownload() (to be triggered by download icon)
 * onOpenOnlineReview(submissionId); onHelp(submissionId);
 * onShowDetails(submissionId);
 * onSubmit() - to trigger when user clicks Add Submission button.
 */

import _ from 'lodash';
import LoadingIndicator from 'components/LoadingIndicator';
import React from 'react';
import PT from 'prop-types';
import moment from 'moment';
import { PrimaryButton } from 'topcoder-react-ui-kit';
import { phaseEndDate } from 'utils/challenge-listing/helper';
import SubmissionsTable from '../SubmissionsTable';

import style from './styles.scss';

export default function SubmissionManagement(props) {
  const {
    challenge,
    submissions,
    loadingSubmissions,
    showDetails,
    onDelete,
    helpPageUrl,
    onDownload,
    onShowDetails,
    challengeUrl,
    onlineReviewUrl,
    submissionPhaseStartDate,
  } = props;

  const { track } = challenge;

  const challengeType = track.toLowerCase();

  const isDesign = challengeType === 'design';
  const isDevelop = challengeType === 'development';
  const currentPhase = challenge.phases
    .filter(p => p.name !== 'Registration' && p.isOpen)
    .sort((a, b) => moment(a.scheduledEndDate).diff(b.scheduledEndDate))[0];
  const submissionPhase = challenge.phases.filter(p => p.name === 'Submission')[0];
  const submissionEndDate = submissionPhase && phaseEndDate(submissionPhase);

  const now = moment();
  const end = moment(currentPhase && currentPhase.scheduledEndDate);
  const diff = end.isAfter(now) ? end.diff(now) : 0;
  const timeLeft = moment.duration(diff);

  const [days, hours, minutes] = [
    timeLeft.get('days'),
    timeLeft.get('hours'),
    timeLeft.get('minutes'),
  ];

  const componentConfig = {
    helpPageUrl,
    onDelete,
    onDownload: onDownload.bind(0, challengeType),
    onlineReviewUrl,
    onShowDetails,
  };
  return (
    <div styleName="submission-management">
      <div styleName="submission-management-header">
        <div styleName="left-col">
          <h4 styleName="name">
            {challenge.name}
          </h4>
          <a href={challengeUrl} styleName="back-btn">
            &lt; Back
          </a>
        </div>
        <div styleName="right-col">
          {
            currentPhase && (
            <p styleName="round">
              {currentPhase.name}
            </p>
            )
          }
          {
            challenge.status !== 'Completed' ? (
              <div>
                <p styleName="time-left">
                  {days > 0 && (`${days}D`)}
                  {' '}
                  {hours}
                  H
                  {' '}
                  {minutes}
                  M
                </p>
                <p styleName="left-label">
                  left
                </p>
              </div>
            ) : (
              <p styleName="time-left">
                The challenge has ended
              </p>
            )
          }
        </div>
      </div>
      <div styleName="submission-management-content">
        <div styleName="content-head">
          <p styleName="title">
            Manage your submissions
          </p>
          {
            isDesign && currentPhase && (
              <p styleName="round-ends">
                <span styleName="ends-label">
                  {currentPhase.name}
                  {' '}
                  Ends:
                </span>
                {' '}
                {end.format('dddd MM/DD/YY hh:mm A')}
              </p>
            )
          }
        </div>
        {
          isDesign && (
            <p styleName="recommend-info">
              We always recommend to download your submission to check you uploaded the correct
              zip files and also verify the photos and fonts declarations.
              If you don’t want to see a submission, simply delete. If you have a new submission,
              use the Upload Submission button to add one at the top of the list.
            </p>
          )
        }
        {
          isDevelop && (
            <p styleName="recommend-info">
              We always recommend to download your submission to check you uploaded
              the correct zip file.
              If you don’t want to see the submission, simply delete.
              If you have a new submission, use the Upload Submission button to
              overwrite the current one.
            </p>
          )
        }
        {loadingSubmissions && <LoadingIndicator />}
        {!loadingSubmissions
          && (
          <SubmissionsTable
            submissionObjects={submissions}
            showDetails={showDetails}
            track={track}
            status={challenge.status}
            submissionPhaseStartDate={submissionPhaseStartDate}
            {...componentConfig}
          />
          )
        }
      </div>
      {now.isBefore(submissionEndDate) && (
        <div styleName="btn-wrap">
          <PrimaryButton
            theme={{
              button: style['add-sub-btn'],
            }}
            to={`${challengeUrl}/submit`}
          >
            {
              (!isDevelop || !submissions || submissions.length === 0)
                ? 'Add Submission' : 'Update Submission'
            }
          </PrimaryButton>
        </div>
      )}
    </div>
  );
}

SubmissionManagement.defaultProps = {
  onDelete: _.noop,
  onShowDetails: _.noop,
  onDownload: _.noop,
  onlineReviewUrl: '',
  helpPageUrl: '',
  loadingSubmissions: false,
  challengeUrl: '',
  submissions: [],
};

SubmissionManagement.propTypes = {
  showDetails: PT.shape().isRequired,
  onDelete: PT.func,
  onlineReviewUrl: PT.string,
  helpPageUrl: PT.string,
  onDownload: PT.func,
  onShowDetails: PT.func,
  challenge: PT.shape().isRequired,
  submissions: PT.arrayOf(PT.shape()),
  loadingSubmissions: PT.bool,
  challengeUrl: PT.string,
  submissionPhaseStartDate: PT.string.isRequired,
};
