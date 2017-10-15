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
use Interop\Http\ServerMiddleware\DelegateInterface;
use Interop\Http\ServerMiddleware\MiddlewareInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Zend\Diactoros\Response\JsonResponse;

/**
 * Questions action.
 */
class GetQuestionsAction implements MiddlewareInterface
{
    /**
     * @var CertificationyLoader
     */
    private $loader;

    public function __construct(CertificationyLoader $loader)
    {
        $this->loader = $loader;
    }

    public function process(Request $request, DelegateInterface $delegate): JsonResponse
    {
        $fetchQuestions = $this->loader->getQuestions(
            $request->getAttribute('nbQuestions', 20),
            $request->getAttribute('categories', [])
        );

        return new JsonResponse($fetchQuestions);
    }
}
