<?php

/*
 * This file is part of the Certificationy Applicant project.
 *
 * (c) Michael COULLERET <michael.coulleret@gmail.com>
 * (c) Mickaël Andrieu <andrieu.travail@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Applicant\Action;

use Applicant\Loader\CertificationyLoader;
use Applicant\Manager\SurveyManager;
use Applicant\Response\JsonResponse;
use Interop\Http\ServerMiddleware\DelegateInterface;
use Interop\Http\ServerMiddleware\MiddlewareInterface;
use Psr\Http\Message\ServerRequestInterface as Request;

/**
 * Survey GET action.
 */
class GetSurveyAction implements MiddlewareInterface
{
    /**
     * @var SurveyManager
     */
    private $surveyManager;

    /**
     * @var CertificationyLoader
     */
    private $certificationyLoader;

    public function __construct(SurveyManager $surveyManager, CertificationyLoader $certificationyLoader)
    {
        $this->surveyManager = $surveyManager;
        $this->certificationyLoader = $certificationyLoader;
    }

    public function process(Request $request, DelegateInterface $delegate): JsonResponse
    {
        $survey = $this->surveyManager->getByToken(
            $request->getAttribute('token')
        );

        $questions = $this->certificationyLoader->getQuestions($survey['nb_questions'], explode(',', $survey['categories']));

        return new JsonResponse($questions->all());
    }
}
